export class Element {
  priority: number;
  data: any;

  constructor(priority: number, data: any = 'no data') {
    this.data = data;
    this.priority = priority;
  }

  set Priority(val: number) {
    if (typeof val !== 'number' || val < 0) {
      this.Priority = 0;
    }
    this.priority = val;
  }

  get Priority() {
    return this.priority;
  }
}