import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper } from './ShipperConcrete';
import { IShipper } from './types';

export class ShipmentChooser {
  type: string;
  zipCode: string;
  shippers: IShipper[];

  constructor( zipCode: string, type: string ) {
    this.zipCode = zipCode;
    this.type = type;
    this.shippers = this.createShippers();
  }

  private createShippers() {
    return [ new AirEastShipper(), new ChicagoSprintShipper(), new PacificParcelShipper() ];
  }

  public chooseShipper(): IShipper {
    const firstNumber = parseInt( this.zipCode.slice( 0, 1 ) );
    const foundShipper = this.shippers.find( ( shipper ) => shipper.zipStart.includes( firstNumber ) );
    return foundShipper || new AirEastShipper();
  }
}