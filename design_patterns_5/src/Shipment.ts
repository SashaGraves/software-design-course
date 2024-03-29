import { IParcel, IShipment, IShipmentChooser, IShipper } from './types';
import { Shipper } from './Shipper';
import { WeightTypeRule, WEIGHT_TYPE } from './partnerData';
import { ShipmentChooser } from './ShipperChooser';

export default class Shipment implements IShipment {
  private parcel: IParcel & {
    type: string;
  };
  protected shipper: IShipper;

  constructor( parcel: IParcel ) {
    const type = this._getTypeByWeight( parcel.Weight );
    this.parcel = { ...parcel, type };
    if ( this.parcel.ShipmentID === 0 ) {
      this.parcel.ShipmentID = this.getShipmentId();
    }
    this.shipper = this.findShipper();
  }

  findShipper() {
    const shipmentChooser: IShipmentChooser = new ShipmentChooser( this._FromZipcode, this._Type );
    return shipmentChooser.chooseShipper();
  }

  protected getShipmentId(): number {
    return Date.now();
  }

  public ship(): string {
    const cost = this._getCost();
    return `Id: ${ this._Id }, from ${ this._WhereFrom }, to ${ this._WhereTo }, price ${ cost } dollars`;
  }

  private _getCost(): number {
    const cost = this.shipper.getCost( this._Weight, this._Type );
    return cost;
  }

  private _getTypeByWeight( weight: number ): string {
    const findRule = WeightTypeRule.find( rule => rule.minWeight < weight && rule.maxWeight >= weight );
    return findRule?.name || WEIGHT_TYPE.OVERSIZED;
  }

  private get _Id() {
    return this.parcel.ShipmentID;
  }

  private get _WhereFrom() {
    return this.parcel.FromAddress;
  }

  private get _FromZipcode() {
    return this.parcel.FromZipCode;
  }

  private get _WhereTo() {
    return this.parcel.ToAddress;
  }

  private get _Weight() {
    return this.parcel.Weight;
  }

  private get _Type() {
    return this.parcel.type;
  }

}