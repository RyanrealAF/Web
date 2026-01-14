import { run } from 'node:test';
import { spec } from 'node:test/reporters';
import process from 'node:process';
import { glob } from 'glob';

async function runTests() {
  const testFiles = await glob('**/*.test.js', { ignore: 'node_modules/**' });

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

  testStream.on('test:summary', (summary) => {
    if (summary.totals.failed > 0 || summary.totals.error > 0) {
      console.error('\nTests failed!');
      process.exit(1);
    } else {
      console.log('\nAll tests passed!');
    }
  });
}

runTests().catch((error) => {
  console.error('An error occurred while running tests:', error);
  process.exit(1);
});