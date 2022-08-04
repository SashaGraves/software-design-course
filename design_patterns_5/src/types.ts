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
  type: string;
};

export interface IShipment {
  getShipmentId: () => void;
  ship: () => string;
}
