import {WeightedGraph, IVertex, AdjacencyList, VividWeight, WeightList} from './types';

export class Graph implements WeightedGraph {
  private adjacencyList: AdjacencyList = {};
  private weightList: WeightList = {};

  private verteces: IVertex[] = [];
  private vividWeightList: VividWeight[] = [];

  addVertex(v: IVertex): void {
    // добавляет вершину в список вершин 
    if (this.Verteces.includes(v)) return;
    this.adjacencyList[v.Key] = [];
    this.adjacencyList[v.Key] = [];
    this.verteces.push(v);
  };

  addEdge(from: IVertex, to: IVertex, weight: number): void {
    // проверяет есть ли вершины в списке
    const areVertecesExist = this.Verteces.includes(from) && this.Verteces.includes(to);
    if (!areVertecesExist) return;

    // добавляет список смежности
    this.adjacencyList[from.Key].push(to.Key);

    // и добавляяет весы для каждой грани
    const weightKey = from.Key + '-' + to.Key;
    this.weightList[weightKey] = weight;

    const vivdWeight = {verteces: [from, to] as [IVertex, IVertex], weight};
    this.vividWeightList.push(vivdWeight);
  };

  get Verteces() {
    return this.verteces;
  }

  get Vivid_Weight_List() {
    return this.vividWeightList;
  }

  get Adjacency_List() {
    return this.adjacencyList;
  }

  get Weight_List() {
    return this.weightList;
  }
}
