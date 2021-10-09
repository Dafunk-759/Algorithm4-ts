class BST {
  val: number;
  left: BST | null;
  right: BST | null;
  constructor(
    val: number,
    left: BST | null,
    right: BST | null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
class KthLargestBST {
  private bst: BST | null;
  private makeBST(sorted: number[]): BST | null {
    if (sorted.length <= 0) return null;
    const mid = sorted.length >> 1;
    return new BST(
      sorted[mid],
      this.makeBST(sorted.slice(0, mid)),
      this.makeBST(sorted.slice(mid + 1))
    );
  }
  private K: number;
  constructor(k: number, nums: number[]) {
    this.bst = this.makeBST(nums.sort((a, b) => a - b));
    this.K = k;
  }
  private insert(val: number, root: BST | null): BST {
    if (root === null) return new BST(val, null, null);
    if (val > root.val)
      root.right = this.insert(val, root.right);
    else root.left = this.insert(val, root.left);
    return root;
  }
  private getTopK(): number {
    let index = 0;
    let ret: number | undefined;
    const inorder = (node: BST | null): void => {
      if (index >= this.K) return;
      if (node === null) return;
      inorder(node.right);
      index += 1;
      if (index === this.K) ret = node.val;
      inorder(node.left);
    };
    inorder(this.bst);
    if (ret === undefined) throw new Error("bad k");
    return ret;
  }
  add(val: number): number {
    this.bst = this.insert(val, this.bst);
    return this.getTopK();
  }
}
class MinHeap {
  private heap: number[];
  private size: number;
  constructor(sortedArr: number[], size: number) {
    this.heap = sortedArr;
    this.size = size;
  }
  getMin(): number {
    return this.heap[0];
  }
  private lower(i: number): number {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (right >= this.heap.length) return left;
    if (this.heap[left] < this.heap[right]) return left;
    return right;
  }
  private exc(a: number, b: number): void {
    [this.heap[a], this.heap[b]] = [
      this.heap[b],
      this.heap[a],
    ];
  }
  private float(): void {
    let i = this.heap.length - 1;
    let p: number;
    while ((p = (i - 1) >> 1) >= 0) {
      if (this.heap[p] <= this.heap[i]) break;
      this.exc(i, p);
      i = p;
    }
  }
  private sink(): void {
    let i = 0;
    while (2 * i + 1 <= this.size - 1) {
      const l = this.lower(i);
      if (this.heap[i] <= this.heap[l]) break;
      this.exc(i, l);
      i = l;
    }
  }
  insert(val: number): void {
    if (this.heap.length < this.size) {
      this.heap.push(val);
      this.float();
      return;
    }
    if (val <= this.getMin()) return;
    this.heap[0] = val;
    this.sink();
  }
}
class KthLargestHeap {
  private K: number;
  private heap: MinHeap;
  constructor(k: number, nums: number[]) {
    this.K = k;
    this.heap = new MinHeap(
      nums.sort((a, b) => a - b).slice(-this.K),
      k
    );
  }
  add(val: number): number {
    this.heap.insert(val);
    return this.heap.getMin();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
