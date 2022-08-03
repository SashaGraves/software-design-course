import { parcel1, parcel0 } from './mockData';
import Client from './Client';
import { IParcel } from './types';


const client = new Client();
client.shipParcel( parcel1 );
client.shipParcel( parcel0 );