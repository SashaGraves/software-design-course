import {IDijkstra, IVertex, IPath, IVertexDij, WeightedGraph} from './types';
import {VertexDij} from './VertexDij';

export class Dijkstra implements IDijkstra {

  private graph: WeightedGraph;

  constructor(graph: WeightedGraph) {
    this.graph = graph;
  }

  findAllShortestPaths(vertex: IVertex): Record<string, IPath> {

  }

  findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath {

  }

  private decorateVertex(vertex: IVertex, isStarting = false): IVertexDij {
    return new VertexDij(vertex, isStarting);
  }

}