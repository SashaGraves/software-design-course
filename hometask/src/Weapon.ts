import { Item } from './Item';

export abstract class Weapon extends Item {
  public MODIFIER_CHANGE_RATE: number = 0.05;
  private baseDamage: number;
  private damageModifier: number;
  private baseDurability: number;
  private durabilityModifier: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);

    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.durabilityModifier = 0;
    this.damageModifier = 0;
  }

  public abstract polish(): void;

  public use(): string {
    const usageRefusal = `You can't use the ${this.getName}, it is broken.`;
    if (this.getDurability <= 0) {
      return usageRefusal;
    }

    this.setDurabilityModifier(this.durabilityModifier - this.MODIFIER_CHANGE_RATE);

    const damageDealed = `You use the ${this.getName}, dealing ${this.getDamage.toFixed(2)} points of damage.`;
    const breakNotify = `The ${this.getName} breaks.`;
    if (this.getDurability > 0) {
      return damageDealed;
    }
    return damageDealed + ' ' + breakNotify;
  };

  public get getDamage() {
    return this.baseDamage + this.damageModifier;
  }

  public get getDurability() {
    const sum = this.baseDurability + this.durabilityModifier;
    if (sum > 0) {
      return sum;
    }

    return 0;
  }

  public get getBaseDamage(): number {
    return this.baseDamage;
  }

  public get getDamageModifier(): number {
    return this.damageModifier;
  }

  public get getDurabilityModifier(): number {
    return this.durabilityModifier;
  }

  public toString(): string {
    const itemInfo = super.toString();
    const durabilityPercent = this.getDurability * 100;
    const weaponInfo = `Damage: ${this.getDamage.toFixed(2)}, Durability: ${durabilityPercent.toFixed(2)}% `;
    return itemInfo + ', ' + weaponInfo;
  };

  public setDamageModifier(value: number): void {
    this.damageModifier = value;
  }

  public setDurabilityModifier(value: number): void {
    this.durabilityModifier = value;
  }

}