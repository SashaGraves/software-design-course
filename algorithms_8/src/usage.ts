import {PriorityQueue} from "./PriorityQueue";
import {Element} from "./Element";

const array: Element[] = [];
for (let i = 0; i < 20; i++) {
  const randomNumber = parseFloat(Math.random().toFixed(3));
  const el = new Element(randomNumber);
  array.push(el);
}

const queue = new PriorityQueue();
queue.enqueueAll(array);
queue.doAllJobs();