import { Comparable } from './Comparable';
import { compareHelper } from './utils';

let id = 0;

export abstract class Item implements Comparable<Item> {

	private static get numberOfItems(): number {
		return id;
	};

	private id: number;
	private value: number;
	private name: string;
	private weight: number;

	constructor(name: string, value: number, weight: number) {
		this.id = id;
		id++;

		this.name = name;
		this.value = value;
		this.weight = weight;
	}

	public abstract use(): void;

	public compareTo(other: Item): number {
		const compareValues = compareHelper(this.value, other.value);
		if (compareValues) {
			return compareValues;
		}
		const compareNames = compareHelper(this.name.toLowerCase(), other.name.toLowerCase());
		return compareNames;
	}

	public toString(): string {
		return `${this.name} − Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
	}

	public get getId(): number {
		return this.id;
	}

	public get getValue(): number {
		return this.value;
	}

	public get getName(): string {
		return this.name;
	}

	public get getWeight(): number {
		return this.weight;
	}

	public setValue(price: number): void {
		this.value = price;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public setWeight(weight: number): void {
		this.weight = weight;
	}

	public static reset(): void {
		id = 0;
	}
}
