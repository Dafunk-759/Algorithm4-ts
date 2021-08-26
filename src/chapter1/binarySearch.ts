import * as util from "../util/indexNode.js";

export default class BinarySearch {
  private constructor() {}

  static rank(key: number, a: number[]): number {
    //数组必须是有序的
    let lo: number = 0;
    let hi: number = a.length - 1;

    while (lo <= hi) {
      //被查找的键要么不存在，要么必然存在于a[lo..hi]之中
      let mid = lo + Math.floor((hi - lo) / 2);
      if (key < a[mid]) hi = mid - 1;
      else if (key > a[mid]) lo = mid + 1;
      else return mid;
    }

    return -1;
  }

  static main(): void {
    const whitelist = util.read(
      "largeW.txt",
      "number"
    ) as number[];

    whitelist.sort((a, b) => a - b);
    console.log(whitelist);

    const input = util.read(
      "largeT.txt",
      "number"
    ) as number[];
    console.log(input);

    const ret: number[] = [];
    input.forEach((value) => {
      if (this.rank(value, whitelist) < 0) {
        ret.push(value);
      }
    });
    console.log(ret);
  }
}

//二分法接受要迭代的集合T[],
//谓词函数pred为真取数组右半部分，为假取左半部分，
//还有可选的range参数，决定二分的范围
export function* binarySearch<T>(
  a: T[],
  pred: (mid: number, a: T[]) => boolean,
  range?: [number, number]
) {
  let lo: number, hi: number;
  //range不存在时，默认二分整个数组
  if (!range) {
    lo = 0;
    hi = a.length - 1;
  } else {
    lo = range[0];
    hi = range[1];
  }
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (pred(mid, a)) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
    yield mid;
  }
}
