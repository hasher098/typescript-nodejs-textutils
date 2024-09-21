export interface ModificationStrategy {
  modify(text: string): string;
}
