import { parcel1, parcel0, parcel2 } from './mockData';
import Client from './Client';


const client = new Client();
client.shipParcel( parcel1 );
client.shipParcel( parcel0 );
client.shipParcel( parcel2 );