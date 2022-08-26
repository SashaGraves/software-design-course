import { IEdge, IVertex } from "./types";

export class Edge implements IEdge {
  vertex1: IVertex;
  vertex2: IVertex;
  weight: number;

  constructor( vertex1: IVertex, vertex2: IVertex, weight: number ) {
    this.vertex1 = vertex1;
    this.vertex2 = vertex2;
    this.weight = weight;
  }

  get To(): string {
    return this.vertex1.Key;
  }

  get From(): string {
    return this.vertex2.Key;
  }

  get Weight(): number {
    return this.weight;
  }
}