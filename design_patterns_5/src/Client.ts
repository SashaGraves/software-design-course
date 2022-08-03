import { IClient, IParcel } from './types';
import Shipment from './Shipment';

export default class Client implements IClient { //proxy
  public shipParcel( parcel: IParcel ) {
    const shipment = new Shipment( parcel );
    const report = shipment.ship();
    console.log( report );
  }

}