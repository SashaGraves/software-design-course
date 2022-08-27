import {IDijkstra, IVertex, IPath, IVertexDij, WeightedGraph} from './types';
import {VertexDij} from './VertexDij';
import {Graph} from './Graph';
import {Vertex} from './Vertex';

export class DijkstraGraph implements IDijkstra {

  private graph: WeightedGraph;
  private dVerteces: VertexDij[] = [];
  private unvisitedNodes: Set<string> = new Set();

  constructor(graph: WeightedGraph) {
    this.graph = graph;
  }

  findAllShortestPaths(vertex: IVertex): Record<string, IPath> {
    this.initialize(vertex);

    this.func(vertex);
  }

  findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath {

  }

  private initialize(startingVertex: IVertex): void {
    this.dVerteces = this.graph.Verteces.map(item => {
      this.unvisitedNodes.add(item.Key);
      if (item.Key === startingVertex.Key) {
        return new VertexDij(item.Key, true);
      }
      return new VertexDij(item.Key);
    });
  }

  private findDVertex(value: string | IVertex): IVertexDij | undefined {
    if (typeof value === 'string') {
      return this.dVerteces.find(item => item.Key === value);
    } else if (value instanceof Vertex) {
      return this.dVerteces.find(item => item.Key === value.Key);
    }
    return;
  }

  private visitNode(node: string | IVertex | IVertexDij) {
    let key: string = '';
    if (typeof node === 'string') {
      key = node;
    } else if (node instanceof Vertex) {
      key = node.Key;
    }
    this.unvisitedNodes.delete(key);
  }

  findNodeMin(nodes: IVertexDij[]) {
    nodes.sort((a, b) => a.Mark - b.Mark);
    return nodes[0];
  }

  private func(startingNode: IVertexDij): IVertexDij {
    const currentKey: string = startingNode.Key;

    // calculate the tentative distance to each of its unvisited neighbor nodes.
    const neightbors: string[] = this.graph.Adjacency_List[currentKey]; // ['2', '3']
    const neightborsV: IVertexDij[] = [];
    neightbors.forEach(key => {
      if (!this.unvisitedNodes.has(key)) return;

      const way = currentKey + '-' + key;
      const weight = this.graph.Weight_List[way];
      const dVertex = this.findDVertex(key);
      if (dVertex) {
        // current mark of node ?< mark of this node + way weight
        const sum = startingNode.Mark + weight;
        const newMark = Math.min(dVertex.Mark, sum);
        dVertex.Mark = newMark;
        neightborsV.push(dVertex);
      }
    });
    this.visitNode(startingNode);

    // find and return next node to visit
    return this.findNodeMin(neightborsV);
  };

}