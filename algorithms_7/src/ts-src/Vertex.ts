import {IVertex} from "./types";

export class Vertex implements IVertex {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public get Key(): string {
    return this.key;
  }
}