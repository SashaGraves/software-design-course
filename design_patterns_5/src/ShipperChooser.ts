import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper } from './ShipperConcrete';
import { IShipper } from './types';

export class ShipmentChooser {
  type: string;
  zipCode: string;
  shippers: IShipper[];

  constructor( zipCode: string, type: string ) {
    this.zipCode = zipCode;
    this.type = type;
    // this.shippers = [ AirEast, ChicagoSprint, PacificParcel ].map( config => new Shipper( config ) );
  }

  public chooseShipper(): IShipper {
    const shipperByZip = this.chooseShipperByZipcode();
    const approvedShipper = this.approveShipmentForType( shipperByZip, this.type );
    return approvedShipper ? shipperByZip : new Shipper( AirEast );
  }


  private chooseShipperByZipcode(): IShipper {
    const firstNumber = parseInt( this.zipCode.slice( 0, 1 ) );
    const foundShipper = this.shippers.find( ( shipper ) => shipper.zipStart.includes( firstNumber ) );
    return foundShipper || new Shipper( AirEast );
  }

  private approveShipmentForType( shipperByZip: IShipper, type: string ): boolean {

  }
}