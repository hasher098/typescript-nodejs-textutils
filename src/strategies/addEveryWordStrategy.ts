import { ModificationStrategy } from "./modificationStrategy";

export class AddEveryWordStrategy implements ModificationStrategy {
  private word: string;
  private tick: number;

  constructor(addEveryValue: string) {
    if (!addEveryValue) {
      throw new Error("word and tick should be provided");
    }
    const [word, tick] = addEveryValue.split("-");
    this.word = word;
    this.tick = Number(tick);
  }

  modify(text: string): string {
    const result = text
      .split("")
      .map((letter, index) => {
        if (index !== 0 && index % this.tick === 0) {
          return (letter = this.word + letter);
        }
        return letter;
      })
      .join("");

    return result;
  }
}
