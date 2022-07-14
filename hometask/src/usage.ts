import { Inventory } from './Inventory';
import { Item } from './Item';
import { Sword } from './Sword';
import { Bow } from './Bow';
import { Pizza } from './Pizza';
import { ItemWeightComparator } from './ItemWeightComparator';
import { Weapon } from './Weapon';
import { Consumable } from './Consumable';

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a: Weapon = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Weapon = new Sword(40, 0.7893, 200, 2);
const c: Weapon = new Sword(40, 1, 100, 3);
const pizza: Consumable = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

// Display the inventory
console.log(inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log(inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log(inventory.toString());

// Use the sword
console.log(a.use());

//polish sword and use again
a.polish();
console.log(a.use());

// create a bow and use it till it break
const bow: Weapon = new Bow(40, 0.15, 10, 3);
console.log(bow.use());
console.log(bow.use());
console.log(bow.use());
console.log(bow.use());

// polish bow and use again 
bow.polish();
bow.polish();
console.log(bow.use());