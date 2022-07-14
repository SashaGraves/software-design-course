import { Weapon } from './Weapon';

const BOW: string = 'bow';

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(BOW, baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    if (this.getDurability >= 1) {
      return;
    }

    const newDurabilityModifier = this.getDurabilityModifier + this.MODIFIER_CHANGE_RATE;
    this.setDurabilityModifier(newDurabilityModifier);
  };
}