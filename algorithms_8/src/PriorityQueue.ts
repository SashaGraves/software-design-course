import {Element} from './Element';

export class PriorityQueue {
  heap: Element[];
  sortedArray: Element[];

  constructor() {
    this.heap = [];
    this.sortedArray = [];
  }

  enqueueAll(data: Element[]) {
    for (let i = 0; i < data.length; i++) {
      this.placeElement(data[i]);
    }
  }

  enqueue(el: Element): void {
    this.placeElement(el);
  }

  dequeue() {
    if (this.heap.length === 0) return null;

    for (let i = 0; i < this.heap.length; i++) {
      this.sortedArray.push(this.delete());
    }

    return this.sortedArray.shift() || null;
  }

  doJob() {
    const el = this.dequeue();
    if (el) {

      console.log(el.Priority);
    }
  }

  doAllJobs() {
    this.doJob();
    while (this.sortedArray.length) {
      this.doJob();
    }
  }

  private placeElement(item: Element): void {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parentInd = this.parentIndex(index);
    while (this.heap[parentInd]?.Priority && this.heap[parentInd]?.Priority < this.heap[index]?.Priority) {
      this.switch(parentInd, index);
      index = this.parentIndex(index);
      parentInd = this.parentIndex(index);
    }
  }

  private parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number): number {
    return (2 * index + 1);
  }

  private rightChildIndex(index: number): number {
    return (2 * index + 2);
  }

  private switch(a: number, b: number): void {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  private delete(): Element {
    const item = this.heap.shift();
    const lastElem = this.heap.pop();
    if (!lastElem) return item as Element;

    this.heap.unshift(lastElem);
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    while (this.heap[leftChild]?.Priority && this.heap[leftChild]?.Priority > this.heap[index]?.Priority || this.heap[rightChild]?.Priority > this.heap[index]?.Priority) {
      let max = leftChild;
      if (this.heap[rightChild]?.Priority && this.heap[rightChild]?.Priority > this.heap[max]?.Priority) {
        max = rightChild;
      }
      this.switch(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item as Element;
  }
}