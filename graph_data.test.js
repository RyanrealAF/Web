import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('Graph Data Parsing: Asymmetric Threat Model', async (t) => {
  // Path to the raw text file containing the threat model
  const dataPath = path.join(__dirname, 'Database/raw/The game now seen Final.txt');

  await t.test('Data file accessibility', () => {
    assert.ok(fs.existsSync(dataPath), `File not found at ${dataPath}`);
  });

  const content = fs.readFileSync(dataPath, 'utf8');
  
  // Extract nodes based on section headers 1.2.1, 1.2.2, 1.2.3
  // This simulates the parsing logic that will be used in the D3 visualization
  const nodes = [];
  const lines = content.split(/\r?\n/);
  const nodePattern = /^\s*1\.2\.[1-3]\s+(.+)/;

  lines.forEach(line => {
    const match = line.match(nodePattern);
    if (match) {
      nodes.push(match[1].trim());
    }
  });

  await t.test('Should extract exactly 3 primary nodes', () => {
    assert.strictEqual(nodes.length, 3, `Expected 3 nodes (Orchestrator, Access Agent, Unwitting Operative), found ${nodes.length}`);
  });

  await t.test('Should contain specific threat actors', () => {
    const expected = ['The Orchestrator', 'The Access Agent', 'The Unwitting Operative'];
    expected.forEach(actor => {
      assert.ok(nodes.some(n => n.includes(actor)), `Missing actor: ${actor}`);
    });
  });
});