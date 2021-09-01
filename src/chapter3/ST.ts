import * as util from "../util/indexNode.js";

interface IST<Key, Value> {
  put(key: Key, value: Value | null): void;
  get(key: Key): Value | null;
  delete(key: Key): void;
  contains(key: Key): boolean;
  isEmpty(): boolean;
  size(): number;
  keys(): Iterable<Key>;
}

export abstract class ST<Key, Value>
  implements IST<Key, Value>
{
  abstract put(key: Key, value: Value | null): void;
  abstract get(key: Key): Value | null;
  abstract size(): number;
  abstract keys(): Iterable<Key>;
  delete(key: Key): void {
    this.put(key, null);
  }
  contains(key: Key): boolean {
    return this.get(key) !== null;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    let ret = ``;
    for (const key of this.keys()) {
      ret += `[key: ${key}, value: ${this.get(key)}]\n`;
    }
    return ret;
  }
}
type File = "tinyTale.txt" | "tale.txt" | "leipzig1M.txt";

export function frequencyCounter(
  ST: new () => ST<string, number>,
  minLen: number = 1,
  fileName: File = "tinyTale.txt"
) {
  const txt = util.read(fileName) as string[];
  const st = new ST();
  console.time("time");
  txt.every((word) => {
    if (word.length < minLen) return true;
    if (!st.contains(word)) st.put(word, 1);
    else st.put(word, (st.get(word) as number) + 1);
    return true;
  });

  let max = "";
  st.put(max, 0);
  for (const word of st.keys()) {
    if (
      (st.get(word) as number) > (st.get(max) as number)
    ) {
      max = word;
    }
  }
  console.log(st.toString());
  console.log(max + " " + st.get(max));
  console.timeEnd("time");
}
