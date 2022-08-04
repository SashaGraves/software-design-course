export type PartnerInfoMap = {
  company: string;
  description: string;
  zipStart: number[];
  costRate: number;
};

export const AirEast = {
  company: 'Air East',
  description: 'Based in Atlanta',
  zipStart: [ 1, 2, 3 ],
  costRate: 39,
};
export const ChicagoSprint = {
  company: 'Chicago Sprint',
  description: 'Based in a suburb of Chicago',
  zipStart: [ 4, 5, 6 ],
  costRate: 42,
};
export const PacificParcel = {
  company: 'Pacific Parcel',
  description: ' Based in San Diego',
  zipStart: [ 7, 8, 9 ],
  costRate: 51,
};

export type Rule = {
  name: string;
  minWeight: number;
  maxWeight: number;
};

export enum WEIGHT_TYPE {
  LETTER = 'Letter',
  PACKAGE = 'Package',
  OVERSIZED = 'Oversized'
}

export const WeightTypeRule: Rule[] = [
  {
    name: WEIGHT_TYPE.LETTER,
    minWeight: 0,
    maxWeight: 15,
  },
  {
    name: WEIGHT_TYPE.PACKAGE,
    minWeight: 15,
    maxWeight: 160,
  },
  {
    name: WEIGHT_TYPE.OVERSIZED,
    minWeight: 160,
    maxWeight: Infinity,
  }
];