import { ModificationStrategy } from "./modificationStrategy";

export class ReverseStrategy implements ModificationStrategy {
  modify(text: string): string {
    return text.split("").reverse().join("");
  }
}
