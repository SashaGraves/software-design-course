import {IDijkstra, IVertex, IPath, IVertexDij, WeightedGraph} from './types';
import {VertexDij} from './VertexDij';
import {Graph} from './Graph';
import {Vertex} from './Vertex';

export class DijkstraGraph implements IDijkstra {

  private graph: WeightedGraph;
  private dVerteces: IVertexDij[] = [];
  private unvisitedNodes: Set<string> = new Set();
  private rememberedNeightbors: Set<IVertexDij> = new Set();

  constructor(graph: WeightedGraph) {
    this.graph = graph;
  }

  // findAllShortestPaths(vertex: IVertex): Record<string, IPath> {
  findAllShortestPaths(vertex: IVertex) {
    if (!this.graph.Verteces.includes(vertex)) throw Error('This vertex not found in graph');

    const startNode = this.initialize(vertex);

    this.doAlgorithm(startNode);

    console.log(this.dVerteces);
  }

  // findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath {

  // }

  private initialize(startingVertex: IVertex): IVertexDij {
    let startingNode: unknown = null;
    this.dVerteces = this.graph.Verteces.map(item => {
      this.unvisitedNodes.add(item.Key);
      if (item.Key === startingVertex.Key) {
        startingNode = new VertexDij(item.Key, true);
        return startingNode as IVertexDij;
      }
      return new VertexDij(item.Key);
    });
    return startingNode as IVertexDij;
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

  private func(startingNode: IVertexDij): IVertexDij[] | undefined {
    console.log('startingNode', startingNode);
    console.log('this.unvisitedNodes: ', this.unvisitedNodes);
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

    // return neightbors nodes

    if (neightborsV.length === 0) return;
    neightborsV.sort((a, b) => a.Mark - b.Mark);
    return neightborsV;
  };

  private doAlgorithm(startingNode: IVertexDij) {
    const nextNodes = this.func(startingNode);
    if (nextNodes) {
      nextNodes.forEach(item => this.rememberedNeightbors.add(item));
      this.doAlgorithm(nextNodes[0]);
    } else {
      const previousNode = this.checkRememberedNeightbors();
      if (previousNode === 'Done') {
        return;
      }
      this.doAlgorithm(previousNode);

    }
  }

  checkRememberedNeightbors(): IVertexDij | 'Done' {
    for (const item of this.rememberedNeightbors.values()) {
      if (this.unvisitedNodes.has(item.Key)) return item;

      this.rememberedNeightbors.delete(item);
    }
    return 'Done';
  }
}