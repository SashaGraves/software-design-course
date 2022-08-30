import {Queue} from './Queue';
import {Element} from './Element';

class PriorityQueue extends Queue {

  constructor(data: Element[]) {
    super(data);
    this.sortData();

  }

  enqueue(el: Element) {
    if (el.priority === undefined) {
      el.priority = 0;
    }

    this.placeElement(el);

    super.enqueue(el);
  }

  placeElement(el: Element) { }

  sortData() { }

}