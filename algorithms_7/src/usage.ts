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
  new Vertex('5')
];
const edges = [
  new Edge(vertices[0], vertices[3], 3),
  new Edge(vertices[0], vertices[1], 5),
  new Edge(vertices[0], vertices[2], 4),
  new Edge(vertices[1], vertices[3], 6),
  new Edge(vertices[1], vertices[2], 5),
];
const graph: WeightedGraph = new Graph();

vertices.forEach(vertex => graph.addVertex(vertex));
edges.forEach(edge => graph.addEdge(edge.From, edge.To, edge.Weight));

console.log(graph.Adjacency_List);
console.log(graph.Vivid_Weight_List);

const dijkstraGraph: IDijkstra = new DijkstraGraph(graph);

dijkstraGraph.findAllShortestPaths(vertices[3]);
/*
{
  '1': { path: ['4', '1'], distance: 3 },
  '2': { path: ['4', '2'], distance: 6 },
  '3': { path: ['4', '1', '3'], distance: 7 },
  '5': { path: [], distance: Infinity }
}
*/

dijkstraGraph.findShortestPath(vertices[3], vertices[2]); // { path: ['4', '1', '3'], distance: 7 }
dijkstraGraph.findShortestPath(vertices[0], vertices[4]); // { path: [], distance: Infinity }
dijkstraGraph.findShortestPath(vertices[0], vertices[0]); // { path: ['1'], distance: 0 }
