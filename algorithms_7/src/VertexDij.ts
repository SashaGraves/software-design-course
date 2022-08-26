import {IVertex, IVertexDij} from "./types";
import {Vertex} from './Vertex';

export class VertexDij implements IVertexDij {
  private mark: number;
  private vertex: IVertex;

  constructor(vertex: IVertex, isStarting: boolean = false) {
    this.vertex = vertex;
    if (isStarting) {
      this.mark = 0;
    } else {
      this.mark = Infinity;
    }
  }

  get Mark(): number {
    return this.mark;
  }

  set Mark(value: number) {
    this.mark = value;
  }

  get Vertex(): IVertex {
    return this.vertex;
  }

}