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