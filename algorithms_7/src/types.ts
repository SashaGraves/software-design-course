export interface WeightedGraph {
  addVertex(key: string): void;
  addEdge(from: IVertex, to: IVertex, weight: number): void;
}

export interface Path {
  path: string[];
  distance: number;
}

export interface Dijkstra<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
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