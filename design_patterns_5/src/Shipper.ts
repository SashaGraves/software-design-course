import { AirEast, ChicagoSprint, PacificParcel } from './partnerData';
import { WeightTypeRule, WEIGHT_TYPE } from './partnerData';
import { IShipper, PartnerInfoMap } from './types';

export abstract class Shipper implements IShipper {
  protected abstract config: PartnerInfoMap;

  protected abstract costRate_LETTER: number;
  protected abstract costRate_PACKAGE: number;

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

  protected shipRule_Letter( weight: number ): number {
    return this.costRate_LETTER * weight;
  };

  protected shipRule_Package( weight: number ): number {
    return this.costRate_PACKAGE * weight;
  };

  abstract shipRule_Oversized( weight: number ): number;
};