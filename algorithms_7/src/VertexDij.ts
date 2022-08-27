import {IVertexDij} from "./types";
import {Vertex} from './Vertex';

export class VertexDij extends Vertex implements IVertexDij {
  private mark: number;

  constructor(key: string, isStarting: boolean = false) {
    super(key);
    if (isStarting) {
      this.mark = 0;
    } else {
      this.mark = Number.MAX_SAFE_INTEGER;;
    }
  }

  get Mark(): number {
    return this.mark;
  }

  set Mark(value: number) {
    this.mark = value;
  }

}