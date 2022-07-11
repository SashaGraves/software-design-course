import { Point } from "./Point";

export abstract class Shape {
  protected readonly defaultColor = "green";
  protected readonly defaultFilled = true;

  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw Error("pass at least three points");
    }
    this.points = points;
    this.color = color || this.defaultColor;
    this.filled = filled ?? this.defaultFilled;
  }

  toString(): string {
    const filled = this.filled ? "filled" : "not filled";
    const pointsList = this.points.map(
      (point: Point) => ` ${point.toString()}`
    );

    return `A Shape with color of ${this.color} and ${filled}. Points:${pointsList}.`;
  }

  getPerimeter(): number {
    let perimeter: number = 0;

    for (let i = 0; i < this.points.length - 1; i++) {
      perimeter += this.points[i].distance(this.points[i + 1]);
    }
    perimeter += this.points[0].distance(this.points[this.points.length - 1]);

    return perimeter;
  }

  abstract getType(): string;
}
