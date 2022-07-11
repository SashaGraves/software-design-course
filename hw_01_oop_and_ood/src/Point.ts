export class Point {
  x: number;
  y: number;

  protected readonly defaultCoordinate = 0;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x || this.defaultCoordinate;
    this.y = y || this.defaultCoordinate;
  }

  public toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number; // distance from this point to (0, 0);
  distance(other: Point): number; // distance from this point to a given instance of Point
  distance(x: number, y: number): number; // distance from this point to a given point (x, y)
  distance(x?: number | Point, y?: number): number {
    let b: Point;

    if (x instanceof Point) {
      b = x;
    } else {
      b = new Point(x, y);
    }

    return getDistance(this, b);
  }
}

function getDistance(a: Point, b: Point): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const result = Math.hypot(dx, dy);

  return parseFloat(result.toFixed(2));
}
