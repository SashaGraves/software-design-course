import { Weapon } from './Weapon';

const POLISH_LIMIT_RATE: number = 0.25;
const SWORD: string = 'sword';

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(SWORD, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const polishLimit = this.getBaseDamage * POLISH_LIMIT_RATE;
    const newDamageModifier = this.getDamageModifier + this.MODIFIER_CHANGE_RATE;
    if (newDamageModifier < polishLimit) {
      this.setDamageModifier(newDamageModifier);
    } else {
      this.setDamageModifier(polishLimit);
    }
  };
}