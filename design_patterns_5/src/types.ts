export interface IClient { // interacts with frontend 
  shipParcel: ( parcel: IParcel ) => void;
}

export type IParcel = {
  ShipmentID: number; // if 0 - call idGenerator
  Weight: number;
  FromAddress: string;
  FromZipCode: string;
  ToAddress: string;
  ToZipCode: string;
};

export interface IShipment {
  // getInstance: () => void;
  getShipmentId: () => void;
  ship: () => string;
}