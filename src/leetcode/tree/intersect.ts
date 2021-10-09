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
function intersect(
  quadTree1: MyNode,
  quadTree2: MyNode
): MyNode {
  if (quadTree1.isLeaf && quadTree2.isLeaf) {
    return new MyNode(quadTree1.val || quadTree2.val, true);
  }
  if (quadTree1.isLeaf && !quadTree2.isLeaf) {
    if (quadTree1.val)
      return new MyNode(
        quadTree1.val || quadTree2.val,
        true
      );
    return quadTree2;
  }
  if (!quadTree1.isLeaf && quadTree2.isLeaf) {
    if (quadTree2.val)
      return new MyNode(
        quadTree1.val || quadTree2.val,
        true
      );
    return quadTree1;
  }
  const topLeft = intersect(
    quadTree1.topLeft as MyNode,
    quadTree2.topLeft as MyNode
  );
  const topRight = intersect(
    quadTree1.topRight as MyNode,
    quadTree2.topRight as MyNode
  );
  const bottomLeft = intersect(
    quadTree1.bottomLeft as MyNode,
    quadTree2.bottomLeft as MyNode
  );
  const bottomRight = intersect(
    quadTree1.bottomRight as MyNode,
    quadTree2.bottomRight as MyNode
  );
  if (
    topLeft.isLeaf &&
    topRight.isLeaf &&
    bottomLeft.isLeaf &&
    bottomRight.isLeaf &&
    topLeft.val === topRight.val &&
    topLeft.val === bottomLeft.val &&
    topLeft.val === bottomRight.val
  ) {
    return new MyNode(topLeft.val, true);
  }
  return new MyNode(
    quadTree1.val || quadTree2.val,
    false,
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  );
}
