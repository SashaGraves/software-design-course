import { WeightedGraph, IVertex } from './types';

export class Graph implements WeightedGraph<IVertex> {
  // добавляет их в список смежности и список весов
  addVertex( key: string ): void {

  };

  addEdge( vertex1: IVertex, vertex2: IVertex, weight: number ): void {

  };
}
