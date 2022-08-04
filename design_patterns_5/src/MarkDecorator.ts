import { IShipment, } from './types';

export abstract class MarkDecorator implements IShipment {
  protected wrappee: IShipment;

  constructor( shipment: IShipment ) {
    this.wrappee = shipment;
  }

  public abstract ship(): string;
}

export class FragileDecorator extends MarkDecorator implements IShipment {
  public ship() {
    return this.wrappee.ship() + `\n**MARK FRAGILE**`;
  }
}

export class DoNotLeaveDecorator extends MarkDecorator implements IShipment {
  public ship() {
    return this.wrappee.ship() + `\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**`;
  }
}

export class ReturnReceiptDecorator extends MarkDecorator implements IShipment {
  public ship() {
    return this.wrappee.ship() + `\n**MARK RETURN RECEIPT REQUESTED**    `;
  }
}

// here is decorator for marks. It implements the same interface as Shipment,
// so can be easily used as wrapper or wrappee of other decorator.