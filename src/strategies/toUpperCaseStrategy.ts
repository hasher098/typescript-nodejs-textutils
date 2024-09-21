import { ModificationStrategy } from "./modificationStrategy";

export class ToUpperCaseStrategy implements ModificationStrategy {
  modify(text: string): string {
    return text.toUpperCase();
  }
}
