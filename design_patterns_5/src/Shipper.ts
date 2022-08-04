import { AirEast, ChicagoSprint, PacificParcel, PartnerInfoMap } from './partnerData';


export class Shipper {
  protected config: PartnerInfoMap;

  constructor( config: PartnerInfoMap ) {
    this.config = config;
  }

  public get zipStart() {
    return this.config.zipStart;
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
    const foundShipper = this.shippers.find( ( shipper ) => shipper.zipStart.includes( firstNumber ) );
    return foundShipper || new Shipper( AirEast );
  }
}

// I do not ise Strategy here.
// There is no need to create different subclasses of Shipper so far, as their logic is same. 
// ShipmentChooser is Factory, that chooses which Shipper instance is needed and produces it.