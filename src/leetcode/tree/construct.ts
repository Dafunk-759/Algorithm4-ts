class MyNode {
  val: boolean;
  isLeaf: boolean;
  topLeft: MyNode | null;
  topRight: MyNode | null;
  bottomLeft: MyNode | null;
  bottomRight: MyNode | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: MyNode,
    topRight?: MyNode,
    bottomLeft?: MyNode,
    bottomRight?: MyNode
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight =
      topRight === undefined ? null : topRight;
    this.bottomLeft =
      bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight =
      bottomRight === undefined ? null : bottomRight;
  }
}
const toVal = (a: number) => a === 1;
const methods = (half: number) => {
  const toLeft = (r: number[]): number[] =>
    r.slice(0, half);
  const toRight = (r: number[]): number[] => r.slice(half);
  const toTop = (grid: number[][]): number[][] =>
    grid.slice(0, half);
  const toBottom = (grid: number[][]): number[][] =>
    grid.slice(half);
  return {
    toLeft,
    toRight,
    toTop,
    toBottom,
  };
};
const allSame = (grid: number[][]): boolean => {
  const el = grid[0][0];
  return grid.every((r) => r.every((item) => item === el));
};
function construct(grid: number[][]): MyNode {
  if (grid.length <= 0) throw new Error("bad grid");
  if (allSame(grid)) {
    return new MyNode(toVal(grid[0][0]), true);
  }
  const half = grid.length / 2;
  const { toTop, toBottom, toLeft, toRight } =
    methods(half);
  return new MyNode(
    true,
    false,
    construct(toTop(grid).map(toLeft)),
    construct(toTop(grid).map(toRight)),
    construct(toBottom(grid).map(toLeft)),
    construct(toBottom(grid).map(toRight))
  );
}
