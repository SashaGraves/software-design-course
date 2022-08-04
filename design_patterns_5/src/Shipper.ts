import { AirEast, ChicagoSprint, PacificParcel } from './partnerData';
import { WeightTypeRule, WEIGHT_TYPE } from './partnerData';
import { IShipper, PartnerInfoMap } from './types';

export abstract class Shipper implements IShipper {
  protected abstract config: PartnerInfoMap;

  public get zipStart() {
    return this.config.zipStart;
  }

  public getCost( weight: number, type: string ): number {
    switch ( type ) {
      case WEIGHT_TYPE.LETTER:
        return this.shipRule_Letter( weight );
      case WEIGHT_TYPE.PACKAGE:
        return this.shipRule_Package( weight );
      default:
        return this.shipRule_Oversized( weight );

    }
  }

  abstract shipRule_Letter( weight: number );
  abstract shipRule_Package( weight: number );
  abstract shipRule_Oversized( weight: number );
};