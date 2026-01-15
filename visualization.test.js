import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('visualization.html integrity check', async (t) => {
  const filePath = path.join(__dirname, 'visualization.html');

  await t.test('file should exist', () => {
    assert.ok(fs.existsSync(filePath), 'visualization.html file not found');
  });

  const content = fs.readFileSync(filePath, 'utf8');

  await t.test('should have correct title', () => {
    assert.match(content, /<title>Psychological Warfare Analysis Visualization<\/title>/);
  });

  await t.test('should contain import map with React and D3', () => {
    assert.match(content, /"react": "https:\/\/esm.sh\/react@18\.2\.0"/);
    assert.match(content, /"d3": "https:\/\/esm.sh\/d3@7\.8\.5"/);
  });

  await t.test('should contain React component logic', () => {
    assert.match(content, /import React.*from 'react'/);
    assert.match(content, /createRoot/);
    assert.match(content, /d3\.select/);
  });
});