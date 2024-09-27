import { ModificationStrategy } from "../interfaces/modificationStrategy";

export class AddWordStrategy implements ModificationStrategy {
  private wordToAdd: string;

  constructor(sentence: string) {
    if (!sentence) {
      throw new Error("A non-empty string to add must be provided.");
    }

    this.wordToAdd = sentence;
  }

  modify(text: string): string {
    return text + this.wordToAdd;
  }
}
