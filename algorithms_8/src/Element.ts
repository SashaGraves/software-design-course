export class Element {
  priority: number;
  data: any;

  constructor(data: any, priority: number) {
    this.data = data;
    this.priority = priority;
  }
}