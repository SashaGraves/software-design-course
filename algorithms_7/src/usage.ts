import {Vertex} from "./Vertex";
import {Edge} from "./Edge";
import {WeightedGraph} from './types';
import {Graph} from "./Graph";

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

vertices.forEach(verticle => graph.addVertex(verticle.Key));
edges.forEach(edge => graph.addEdge(edge.From, edge.To, edge.Weight));
console.log('vertices: ', vertices);
console.log('edges: ', edges);

