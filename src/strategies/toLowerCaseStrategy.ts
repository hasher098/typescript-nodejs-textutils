import { ModificationStrategy } from "./modificationStrategy";

export class ToLowerCaseStrategy implements ModificationStrategy {
  modify(text: string): string {
    return text.toLowerCase();
  }
}
