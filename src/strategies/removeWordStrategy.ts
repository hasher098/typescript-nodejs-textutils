import { ModificationStrategy } from "../interfaces/modificationStrategy";

export class RemoveWordStrategy implements ModificationStrategy {
  private wordToRemove: string;

  constructor(wordToRemove: string) {
    if (!wordToRemove) {
      throw new Error("A non-empty string to remove must be provided.");
    }
    this.wordToRemove = wordToRemove;
  }
  modify(text: string): string {
    const regex = new RegExp(this.wordToRemove, "g");
    return text.replace(regex, "");
  }
}
