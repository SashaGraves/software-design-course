import { IShipment, IMarkAssistant } from "./types";
import { FragileDecorator, DoNotLeaveDecorator, ReturnReceiptDecorator } from './MarkDecorator';

export class MarkAssistant implements IMarkAssistant {

  packShipment( shipment: IShipment ): IShipment {
    const fragileShipment = new FragileDecorator( shipment );
    const fragileDoNotLeave = new DoNotLeaveDecorator( fragileShipment );
    const fragileLeaveReceipt = new ReturnReceiptDecorator( fragileDoNotLeave );
    return fragileLeaveReceipt;
  }
}

// this assistant is not big deal now, but it can perform choises if needed.