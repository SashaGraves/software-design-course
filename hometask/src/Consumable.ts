import { Item } from './Item';

export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled;
    this.consumed = false;
  }

  public abstract eat(): string;

  public use(): string {

    if (this.consumed) {
      return `There is nothing left of the ${this.getName} to consume.`;
    }

    if (this.spoiled) {
      const eatNotify = this.eat();
      const spoiledNotify = 'You feel sick.';
      return eatNotify + '\n' + spoiledNotify;
    }

    return this.eat();
  };

  public get isConsumed(): boolean {
    return this.consumed;
  };

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public get isSpoiled(): boolean {
    return this.spoiled;
  }

  public toString(): string {
    const info = super.toString();
    if (this.isSpoiled) {
      const spoiledNotify = `This ${this.getName} does not look fresh`;
      return info + '\n' + spoiledNotify;
    }
    return info;
  }
}