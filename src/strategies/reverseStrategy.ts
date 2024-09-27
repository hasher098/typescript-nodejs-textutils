import { ModificationStrategy } from "../interfaces/modificationStrategy";

export class ReverseStrategy implements ModificationStrategy {
  modify(text: string): string {
    return text.split("").reverse().join("");
  }
}
