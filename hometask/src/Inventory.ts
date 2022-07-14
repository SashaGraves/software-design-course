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
    const anyItem = this.items[0];
    this.items.sort((a: Item, b: Item) => anyItem.compareTo.call(a, b)); ///????
  }

  public toString(): string {
    const itemsInfo = this.items.map(item => item.toString());
    return itemsInfo.join(', ');
  }
}