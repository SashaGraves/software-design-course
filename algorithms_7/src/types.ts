import {Vertex} from "./Vertex";

export interface WeightedGraph {
  addVertex(vertex: IVertex): void;
  addEdge(from: IVertex, to: IVertex, weight: number): void;
  Adjacency_List: AdjacencyList;
  Verteces: IVertex[];
  Vivid_Weight_List: VividWeight[];
  Weight_List: WeightList;
}

export interface IPath {
  path: string[];
  distance: number;
}

export interface IDijkstra {
  findAllShortestPaths(vertex: IVertex): void; // требуется найти кратчайшие расстояния от 1-й вершины до всех остальных.
  findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath;
}

export type AdjacencyList = {
  [key: string]: string[]; // '1': ['2', '3']
};

export interface IVertex {
  Key: string;
}

export interface IEdge {
  Weight: number;
  To: IVertex;
  From: IVertex;
}

export interface IVertexDij extends IVertex {
  Mark: number;
}

export type VividWeight = {
  verteces: [IVertex, IVertex];
  weight: number;
};

export type VividAdjacency = {
  vertex: IVertex;
  connections: IVertex[];
};

export type WeightList = {
  [key: string]: number; // '1-2': 4
};
