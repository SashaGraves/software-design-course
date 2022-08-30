import {Vertex} from "./Vertex";
import {Edge} from "./Edge";
import {WeightedGraph, IDijkstra} from './types';
import {Graph} from "./Graph";
import {DijkstraGraph} from "./DijkstraGraph";

const vertices = [
  new Vertex('1'),
  new Vertex('2'),
  new Vertex('3'),
  new Vertex('4'),
  new Vertex('5'),
  new Vertex('6')
];
const edges = [
  new Edge(vertices[0], vertices[1], 7),
  new Edge(vertices[1], vertices[0], 7),
  new Edge(vertices[0], vertices[5], 14),
  new Edge(vertices[5], vertices[0], 14),
  new Edge(vertices[0], vertices[2], 9),
  new Edge(vertices[2], vertices[0], 9),
  new Edge(vertices[1], vertices[2], 10),
  new Edge(vertices[2], vertices[1], 10),
  new Edge(vertices[2], vertices[5], 2),
  new Edge(vertices[5], vertices[2], 2),
  new Edge(vertices[2], vertices[3], 11),
  new Edge(vertices[3], vertices[2], 11),
  new Edge(vertices[1], vertices[3], 15),
  new Edge(vertices[3], vertices[1], 15),
  new Edge(vertices[3], vertices[4], 6),
  new Edge(vertices[4], vertices[3], 6),
  new Edge(vertices[4], vertices[5], 9),
  new Edge(vertices[5], vertices[4], 9),
];
const graph: WeightedGraph = new Graph();

vertices.forEach(vertex => graph.addVertex(vertex));
edges.forEach(edge => graph.addEdge(edge.From, edge.To, edge.Weight));

console.log(graph.Adjacency_List);
console.log(graph.Weight_List);

const dijkstraGraph: IDijkstra = new DijkstraGraph(graph);

dijkstraGraph.findAllShortestPaths(vertices[0]);

console.log(dijkstraGraph.findShortestPath(vertices[3], vertices[2]));
console.log(dijkstraGraph.findShortestPath(vertices[0], vertices[4]));
console.log(dijkstraGraph.findShortestPath(vertices[0], vertices[0])); 
