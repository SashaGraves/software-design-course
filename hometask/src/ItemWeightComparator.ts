import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
import { compareHelper } from './utils';

//передавать его в инвентарь
export class ItemWeightComparator implements ItemComparator {

	public compare(first: Item, second: Item): number {
		const compareWeight = compareHelper(first.getWeight, second.getWeight);
		if (compareWeight) {
			return compareWeight;
		}
		const innerCompare = first.compareTo(second);
		return innerCompare;
	}
}
