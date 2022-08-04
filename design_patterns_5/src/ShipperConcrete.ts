import { Shipper } from './Shipper';
import { AirEast, ChicagoSprint, PacificParcel, PartnerInfoMap } from './partnerData';

export class AirEastShipper extends Shipper {
  protected config: PartnerInfoMap = AirEast;

  shipRule_Letter( weight: number ) { };
  shipRule_Package( weight: number ) { };
  shipRule_Oversized( weight: number ) { };
}

export class ChicagoSprintShipper extends Shipper {
  protected config: PartnerInfoMap = ChicagoSprint;

  shipRule_Letter( weight: number ) { };
  shipRule_Package( weight: number ) { };
  shipRule_Oversized( weight: number ) { };
}

export class PacificParcelShipper extends Shipper {
  protected config: PartnerInfoMap = PacificParcel;

  shipRule_Letter( weight: number ) { };
  shipRule_Package( weight: number ) { };
  shipRule_Oversized( weight: number ) { };
}