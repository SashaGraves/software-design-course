import { Consumable } from './Consumable';

const PIZZA = 'pizza';

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super(PIZZA, 1, 1, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = 0;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      const sliceEatenNotify = 'You eat a slice of the pizza.';

      if (this.slicesEaten = this.numberOfSlices) {
        const lastSliceNotify = 'That was the last.';
        this.setConsumed(true);
        return sliceEatenNotify + '\n' + lastSliceNotify;
      }
      return sliceEatenNotify;
    } else {
      return '';
    }
  }
}