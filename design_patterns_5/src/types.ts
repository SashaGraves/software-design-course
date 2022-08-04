export interface IClient { // interacts with frontend 
  shipParcel: ( parcel: IParcel ) => void;
}

export interface IParcel {
  ShipmentID: number; // if 0 - call idGenerator
  Weight: number;
  FromAddress: string;
  FromZipCode: string;
  ToAddress: string;
  ToZipCode: string;
};

export interface IShipment {
  ship: () => string;
}

export interface IShipmentChooser {
  chooseShipper(): IShipper;
}

export interface IShipper {
  zipStart: number[];
  getCost: ( weight: number, type: string ) => number;
}

export type PartnerInfoMap = {
  company: string;
  description: string;
  zipStart: number[];
  costRate: number;
};

export interface IMarkAssistant {
  packShipment( shipment: IShipment ): IShipment;
}