import { AirEast, ChicagoSprint, PacificParcel, PartnerInfoMap } from './partnerData';
import { IParcel } from './types';


export class Shipper {
  config: PartnerInfoMap;
  // getInstance() {  }

  constructor( config: PartnerInfoMap ) {
    this.config = config;
  }

  public getCost() {
    return this.config.costRate;
  }
};

export class ShipmentChooser {
  zipCode: string;
  shippers: Shipper[];

  constructor( zipCode: string ) {
    this.zipCode = zipCode;
    this.shippers = [ AirEast, ChicagoSprint, PacificParcel ].map( config => new Shipper( config ) );
  }

  chooseShipper(): Shipper {
    const firstNumber = parseInt( this.zipCode.slice( 0, 1 ) );
    const foundShipper = this.shippers.find( ( shipper ) => shipper.config.zipStart.includes( firstNumber ) );
    return foundShipper || new Shipper( AirEast );
  }
}