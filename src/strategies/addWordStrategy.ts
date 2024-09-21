import { ModificationStrategy } from "./modificationStrategy";

export class AddWordStrategy implements ModificationStrategy {
  private wordToAdd: string;

  constructor(wordToAdd: string) {
    if (!wordToAdd) {
      throw new Error("A non-empty string to Add must be provided.");
    }

    this.wordToAdd = wordToAdd;
  }

  modify(text: string): string {
    return text + this.wordToAdd;
  }
}
