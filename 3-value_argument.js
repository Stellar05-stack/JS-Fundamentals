const args = process.argv.slice(2);

const [firstArg] = args;

if (!firstArg) {
  console.log('No argument');
} else {
  console.log(firstArg);
}