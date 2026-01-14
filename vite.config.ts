import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Security middleware for auto-trigger firewall protection
const securityMiddleware = () => {
  return {
    name: 'firewall-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Security headers - auto-triggered protection
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('X-Frame-Options', 'DENY');
        res.setHeader('X-XSS-Protection', '1; mode=block');
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
        res.setHeader('Content-Security-Policy',
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://esm.sh; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "img-src 'self' data: https:; " +
          "connect-src 'self' https://esm.sh ws://localhost:3000 wss://localhost:3000"
        );

        // Rate limiting - basic implementation (auto-trigger protection)
        const clientIP = req.socket.remoteAddress || req.connection.remoteAddress;
        const currentTime = Date.now();
        const windowMs = 15 * 60 * 1000; // 15 minutes
        const maxRequests = 100; // requests per window

        if (!server._rateLimit) server._rateLimit = new Map();

        const clientRequests = server._rateLimit.get(clientIP) || [];
        const recentRequests = clientRequests.filter(time => currentTime - time < windowMs);

        if (recentRequests.length >= maxRequests) {
          res.writeHead(429, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Too many requests - firewall protection activated' }));
          return;
        }

        recentRequests.push(currentTime);
        server._rateLimit.set(clientIP, recentRequests);

        // Host validation - auto-trigger firewall
        const allowedHosts = ['localhost', '127.0.0.1', '::1'];
        const host = req.headers.host?.split(':')[0];

        if (host && !allowedHosts.includes(host)) {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Access denied - firewall protection activated' }));
          return;
        }

        next();
      });
    }
  };
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: 'localhost', // Changed from 0.0.0.0 for security - firewall protection
        cors: {
          origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
          credentials: true
        },
        hmr: {
          port: 3000
        },
        // Firewall configuration - auto-trigger protection
        middlewareMode: false,
        strictPort: true,
        open: false, // Prevent auto-opening browser for security
      },
      plugins: [
        react(),
        securityMiddleware() // Auto-trigger firewall middleware
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // Build security
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
              d3: ['d3'],
              lucide: ['lucide-react']
            }
          }
        },
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: mode === 'production',
            drop_debugger: mode === 'production'
          }
        }
      }
    };
});