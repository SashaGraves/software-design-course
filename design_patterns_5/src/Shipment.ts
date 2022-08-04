import { IParcel, IShipment, IShipmentChooser } from './types';
import { Shipper } from './Shipper';
import { WeightTypeRule, WEIGHT_TYPE } from './partnerData';
import { ShipmentChooser } from './ShipperChooser';

export default class Shipment implements IShipment {
  private parcel: IParcel;
  shipper: Shipper;

  constructor( parcel: IParcel ) {
    this.parcel = parcel;
    if ( this.parcel.ShipmentID === 0 ) {
      this.parcel.ShipmentID = this.getShipmentId();
    }
    this.parcel.type = this._getTypeByWeight( this._Weight );
  }

  findShipper() {
    const shipmentChooser: IShipmentChooser = new ShipmentChooser( this._FromZipcode, this._Type );
    this.shipper = shipmentChooser.chooseShipper();
  }

  public getShipmentId(): number {
    return Date.now();
  }

  public ship(): string {
    const cost = this._getCost();
    return `Id: ${ this._Id }, from ${ this._WhereFrom }, to ${ this._WhereTo }, price ${ cost } cents`;
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