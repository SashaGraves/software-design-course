import {WeightedGraph, IVertex, AdjacencyList, WeightList} from './types';

export class Graph implements WeightedGraph {
  private adjacencyList: AdjacencyList = {};
  private weightList: WeightList = {};

  addVertex(key: string): void {
    // добавляет вершину в список вершин 
    if (this.vertecesList.includes(key)) return;
    this.adjacencyList[key] = [];
  };

  addEdge(from: IVertex, to: IVertex, weight: number): void {
    // проверяет есть ли вершины в списке
    const areVertecesExist = this.vertecesList.includes(from.Key) && this.vertecesList.includes(to.Key);
    if (areVertecesExist) return;

    // добавляет список смежности
    this.adjacencyList[from.Key].push(to.Key);

    // и добавляяет весы для каждой грани
    const weightKey = from.Key + to.Key;
    this.weightList[weightKey] = weight;
  };

  private get vertecesList(): string[] {
    return Object.keys(this.adjacencyList);
  }
}
