import { Shape } from "./Shape";
import { Point } from "./Point";

export class Triangle extends Shape {
  constructor(p1: Point, p2: Point, p3: Point);
  constructor(p1: Point, p2: Point, p3: Point, color: string, filled: boolean);
  constructor(
    p1: Point,
    p2: Point,
    p3: Point,
    color?: string,
    filled?: boolean
  ) {
    const args = arguments;
    super([p1, p2, p3], color, filled);
  }

  toString() {
    return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`;
  }

  getType() {
    const a = this.points[0].distance(this.points[1]);
    const b = this.points[1].distance(this.points[2]);
    const c = this.points[0].distance(this.points[2]);
    const set = new Set([a, b, c]);

    switch (set.size) {
      case 1:
        return "equilateral triangle";

      case 2:
        return "isosceles triangle";

      default:
        return "scalene triangle";
    }
  }
}
