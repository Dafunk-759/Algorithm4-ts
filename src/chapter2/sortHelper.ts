export function exch<T>(
  a: T[],
  i: number,
  j: number
): void {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

export function isSorted<T>(
  arr: T[],
  cp: (a: T, b: T) => number
): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (cp(arr[i], arr[i - 1]) < 0) return false;
  }
  return true;
}

export type Sort = <T>(
  arr: T[],
  cp: (a: T, b: T) => number
) => T[];

export function test(sort: Sort) {
  const input = [
    "S",
    "O",
    "R",
    "T",
    "E",
    "X",
    "A",
    "M",
    "P",
    "L",
    "E",
  ];

  const cp = (a: string, b: string) =>
    a > b ? 1 : a < b ? -1 : 0;

  sort(input, cp);

  console.assert(isSorted(input, cp));
  console.log(input);
}

export function shuffle<T>(a: T[]) {
  let index = -1,
    length = a.length,
    lastIndex = length - 1;

  while (++index < length) {
    let rand = baseRandom(index, lastIndex),
      value = a[rand];

    a[rand] = a[index];
    a[index] = value;
  }
  return a;
}

function baseRandom(lower: number, upper: number) {
  return (
    lower + Math.floor(Math.random() * (upper - lower + 1))
  );
}
