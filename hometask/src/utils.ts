function compareHelper(v1: number, v2: number): number
function compareHelper(v1: string, v2: string): number
function compareHelper(v1: string | number, v2: string | number): number {
  if (v1 > v2) {
    return 1
  } else if (v1 < v2) {
    return -1
  }
  return 0;
}

export { compareHelper }