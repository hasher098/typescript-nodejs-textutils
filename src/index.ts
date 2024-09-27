import { registerStrategiesByVersion } from "./factories/strategyRegistration";
import { TextService } from "./services/textService";
import { VERSIONS } from "./interfaces/versions";
import {
  getContentFromInputFile,
  saveContentToOutput,
} from "./utils/fileUtils";
// read args
const inputFile = process.argv[2];
const outputFile = process.argv[3];
const commands = process.argv.slice(4);

if (!inputFile || !outputFile || commands.length === 0) {
  console.error(
    "Usage: node app.js <inputFile> <outputFile> <modification1> <modification2> ..."
  );
  console.error(
    "Example: node app.js input.txt output.txt uppercase lowercase reverse remove:test"
  );
  process.exit(1);
}

// First we need to register strategies that we want to use
// This allows to configure which strategies can be used
// there might be version check or something like that

registerStrategiesByVersion(VERSIONS.PREMIUM);

const textService = new TextService();

// get all modification strategies from command args
const modifications = textService.getModificationsFromArgs(commands);

// load them to the instance of textService
textService.loadModifications(modifications);

// load content of inputFile

getContentFromInputFile(inputFile).then((fileContent) => {
  const resultText = textService.processText(fileContent);
  saveContentToOutput(resultText, outputFile);
});
