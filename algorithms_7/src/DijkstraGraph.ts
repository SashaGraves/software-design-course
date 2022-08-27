import {IDijkstra, IVertex, IPath, IVertexDij, WeightedGraph} from './types';
import {VertexDij} from './VertexDij';
import {Graph} from './Graph';
import {Vertex} from './Vertex';

export class DijkstraGraph implements IDijkstra {

  private graph: WeightedGraph;
  private dVerteces: VertexDij[];

  constructor(graph: WeightedGraph) {
    this.graph = graph;
  }

  findAllShortestPaths(vertex: IVertex): Record<string, IPath> {
    this.initialize(vertex);

  }

  findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath {

  }

  private initialize(startingVertex: IVertex): void {
    this.dVerteces = this.graph.Verteces.map(item => {
      if (item.Key === startingVertex.Key) {
        return new VertexDij(item, true);
      }
      return new VertexDij(item);
    });
  }

}