import { run } from 'node:test';
import { spec } from 'node:test/reporters';
import process from 'node:process';
import { glob } from 'glob';

async function runTests() {
  const testFiles = ['example.test.js'];

  if (testFiles.length === 0) {
    console.log('No test files found.');
    process.exit(0);
  }

  console.log(`Found ${testFiles.length} test files. Running...`);

  const testStream = run({
    files: testFiles,
    concurrency: true,
  });

  testStream.compose(spec).pipe(process.stdout);
}

runTests().catch((error) => {
  console.error('An error occurred while running tests:', error);
  process.exit(1);
});