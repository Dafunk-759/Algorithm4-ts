import * as util from "../util/indexNode.js";

class BinarySearch {
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

  foo: number = 10;

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

BinarySearch.main();

export {};
