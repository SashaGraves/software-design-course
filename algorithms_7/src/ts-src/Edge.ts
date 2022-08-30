import {IEdge, IVertex} from "./types";

export class Edge implements IEdge {
  private from: IVertex;
  private to: IVertex;
  private weight: number;

  constructor(vertex1: IVertex, vertex2: IVertex, weight: number) {
    this.from = vertex1;
    this.to = vertex2;
    this.weight = weight;
  }

  get To(): IVertex {
    return this.to;
  }

  get From(): IVertex {
    return this.from;
  }

  get Weight(): number {
    return this.weight;
  }
}