import * as util from "../util/indexNode.js";

function dedup(a: string[]): string[] {
  const ret: string[] = [];
  a.sort();
  ret.push(a[0]);
  for (let i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) continue;
    else ret.push(a[i]);
  }
  return ret;
}

// console.log(dedup(["a", "c", "e", "a", "g", "c", "t"]));

interface Item {
  key: string;
  count: number;
}

function frequency(a: string[]): Item[] {
  const ret: Item[] = [];
  a.sort();
  ret.push({
    key: a[0],
    count: 1,
  });
  for (let i = 1; i < a.length; i++) {
    if (a[i] === a[i - 1]) {
      ret[ret.length - 1].count++;
    } else {
      ret.push({
        key: a[i],
        count: 1,
      });
    }
  }
  ret.sort((a, b) => b.count - a.count);
  return ret;
}

function testFreq() {
  const words = util.read("tale.txt") as string[];
  console.time("test");
  const ret = frequency(words);
  console.log(ret);
  console.timeEnd("test");
}
testFreq();
