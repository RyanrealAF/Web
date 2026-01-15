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
  });

  let failed = false;

  testStream.on('test:fail', () => {
      failed = true;
  });

  testStream.on('close', () => {
      if(failed) {
          console.error('\nTests failed!');
          process.exit(1);
      } else {
          console.log('\nAll tests passed!');
      }
  });

  testStream.compose(spec).pipe(process.stdout);
}

runTests().catch((error) => {
  console.error('An error occurred while running tests:', error);
  process.exit(1);
});