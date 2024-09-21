import { processText } from "./controllers/textController";

const inputFile = process.argv[2];
const outputFile = process.argv[3];

const modifications = process.argv.slice(4);

console.log(inputFile, outputFile, modifications);

if (!inputFile || !outputFile || modifications.length === 0) {
  console.error(
    "Usage: node app.js <inputFile> <outputFile> <modification1> <modification2> ..."
  );
  console.error(
    "Example: node app.js input.txt output.txt uppercase lowercase reverse remove:test"
  );
  process.exit(1);
}

processText(inputFile, outputFile, modifications);
