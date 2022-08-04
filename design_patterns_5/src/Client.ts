import { IClient, IParcel } from './types';
import Shipment from './Shipment';
import { MarkDecorator } from './MarkDecorator';
import { MarkAssistant } from './MarkAssistant';

export default class Client implements IClient { //proxy
  public shipParcel( parcel: IParcel ) {
    const freshShipment = new Shipment( parcel );
    const markAssistant = new MarkAssistant();
    const shipment = markAssistant.packShipment( freshShipment );
    const report = shipment.ship();
    console.log( report );
  }

}