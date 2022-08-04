import { Shipper } from './Shipper';
import { AirEast, ChicagoSprint, PacificParcel } from './partnerData';
import { PartnerInfoMap } from './types';


// here template pattern is used. Common properties and logic (shipRule_letter and shipRule_package) moved to superclass, 
// exclusive logic (shipRule_Oversized) is implemented in subclasses.
// also vaues assigned in class body and construcotor not used. 
export class AirEastShipper extends Shipper {
  protected config: PartnerInfoMap = AirEast;

  costRate_LETTER = 0.39;
  costRate_PACKAGE = 0.25;
  private oversizedBonus = 10;

  shipRule_Oversized( weight: number ) {
    const packageCost = this.shipRule_Package( weight );
    return packageCost + this.oversizedBonus;
  };
}

export class ChicagoSprintShipper extends Shipper {
  protected config: PartnerInfoMap = ChicagoSprint;

  costRate_LETTER = 0.42;
  costRate_PACKAGE = 0.20;

  shipRule_Oversized( weight: number ) {
    return this.shipRule_Package( weight );
  };
}

export class PacificParcelShipper extends Shipper {
  protected config: PartnerInfoMap = PacificParcel;

  costRate_LETTER = 0.51;
  costRate_PACKAGE = 0.19;
  private costRate_Oversized = this.costRate_PACKAGE + 0.02;

  shipRule_Oversized( weight: number ) {
    return this.costRate_Oversized * weight;
  };
}