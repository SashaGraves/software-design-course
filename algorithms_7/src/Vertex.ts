import { IVertex } from "./types";

export class Vertex implements IVertex {
  key: string;

  constructor( key: string ) {
    this.key = key;
  }

  get Key(): string {
    return this.key;
  }
}