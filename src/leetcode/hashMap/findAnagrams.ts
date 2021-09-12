// leet code  438. 找到字符串中所有字母异位词
import * as util from "../../util/indexNode.js";

function makeStringMap(s: string) {
  const map = new Map<string, number>();
  for (const c of s) {
    if (map.has(c)) {
      map.set(c, (map.get(c) as number) + 1);
    } else {
      map.set(c, 1);
    }
  }
  return map;
}

function isAnagram(
  s: Map<string, number>,
  t: Map<string, number>
) {
  for (const [key, value] of s) {
    if (t.get(key) !== value) {
      return false;
    }
  }
  for (const [key, value] of t) {
    if (s.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function genSubStringMap(
  stringMap: Map<string, number>,
  s: string
): Map<string, number> {
  const first = s[0];
  const last = s[s.length - 1];
  return add(del(stringMap, first), last);
}

function del(
  stringMap: Map<string, number>,
  s: string
): Map<string, number> {
  if (stringMap.get(s) === 1) {
    stringMap.delete(s);
  } else {
    stringMap.set(s, (stringMap.get(s) as number) - 1);
  }
  return stringMap;
}

function add(
  stringMap: Map<string, number>,
  s: string
): Map<string, number> {
  if (stringMap.has(s)) {
    stringMap.set(s, (stringMap.get(s) as number) + 1);
  } else {
    stringMap.set(s, 1);
  }
  return stringMap;
}

function findAnagrams(s: string, p: string): number[] {
  const ret: number[] = [];
  const m = p.length;
  const sMap = makeStringMap(s.slice(0, m));
  const pMap = makeStringMap(p);
  if (isAnagram(sMap, pMap)) {
    ret.push(0);
  }
  for (let i = 0; i < s.length - m; i++) {
    const subString = s.slice(i, i + m + 1);
    const newsMap = genSubStringMap(sMap, subString);
    if (isAnagram(newsMap, pMap)) {
      ret.push(i + 1);
    }
  }
  return ret;
}

util.test(findAnagrams, [1], "baa", "aa");
