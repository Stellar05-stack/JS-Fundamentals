const args = process.argv.slice(2);

if (args.isEmpty()) {
  console.log('No argument');
} else {
  console.log(args[0]);
}