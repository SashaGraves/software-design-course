export class Queue {
  data: any[] = [];

  constructor(data: any[]) {
    this.data = data;
  }

  enqueue(el: any) {
    this.data.push(el);
  }

  dequeue() {
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  clear() {
    this.data = [];
  }

}