export interface WeightedGraph {
  addVertex(key: string): void;
  addEdge(from: IVertex, to: IVertex, weight: number): void;
  Adjacency_List: AdjacencyList;
  Weight_List: WeightList;
}

export interface IPath {
  path: string[];
  distance: number;
}

export interface IDijkstra {
  findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath;
  findAllShortestPaths(vertex: IVertex): Record<string, IPath>; // требуется найти кратчайшие расстояния от 1-й вершины до всех остальных.
}

export type AdjacencyList = {
  [key: string]: string[]; // '1': ['2', '3']
};

export type WeightList = {
  [key: string]: number; // '1-2': 4
};

export interface IVertex {
  Key: string;
}

export interface IEdge {
  Weight: number;
  To: IVertex;
  From: IVertex;
}

export interface IVertexDij {
  Mark: number;
  Vertex: IVertex;
}