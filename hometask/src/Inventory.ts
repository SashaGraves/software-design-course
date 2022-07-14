import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator): void;
  public sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
      return;
    }
    this.items.sort((a: Item, b: Item) => {
      if (a.getValue > b.getValue) return 1;
      if (a.getValue < b.getValue) return -1;
      return 0;
    });
  }

  public toString(): string {
    const itemsInfo = this.items.map(item => item.toString());
    return itemsInfo.join(', ');
  }
}