import * as util from "../../util/indexNode.js";

function makeStringMap(str?: string) {
  const sMap: Record<string, number> = Object.create(null);
  let s = "";
  if (str !== undefined) {
    for (const a of str) {
      add(a);
    }
  }

  function add(key: string) {
    s += key;
    sMap[key] = sMap[key] === undefined ? 1 : sMap[key] + 1;
  }
  function remove(key: string) {
    s = s.slice(1);
    sMap[key] = sMap[key] - 1;
  }
  function keys() {
    return Object.keys(sMap);
  }
  function get(key: string): number | undefined {
    return sMap[key];
  }
  function match(
    other: ReturnType<typeof makeStringMap>
  ): boolean {
    return keys().every((key) => {
      return (
        other.get(key) !== undefined &&
        (other.get(key) as number) >= (get(key) as number)
      );
    });
  }
  function raw() {
    return s;
  }

  return {
    add,
    remove,
    keys,
    get,
    match,
    raw,
  };
}

function minWindow(s: string, t: string): string {
  let ret = "",
    minLength = Number.POSITIVE_INFINITY,
    start = 0;
  const tMap = makeStringMap(t);
  const sMap = makeStringMap();

  for (let end = 0; end < s.length; end++) {
    sMap.add(s[end]);
    while (tMap.match(sMap)) {
      const sub = sMap.raw();

      if (sub.length < minLength) {
        ret = sub;
        minLength = sub.length;
      }
      sMap.remove(s[start]);
      start += 1;
    }
  }
  return ret;
}

util.test(minWindow, "BANC", "ADOBECODEBANC", "ABC");
util.test(minWindow, "a", "a", "a");
util.test(minWindow, "", "a", "aa");
util.test(minWindow, "cwae", "cabwefgewcwaefgcf", "cae");

// const input = util.read("minWindow.txt") as string[];
// console.log(minWindow(input[0], input[1]));
