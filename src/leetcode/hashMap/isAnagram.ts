// leet code 242. 有效的字母异位词

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

function anagram(
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

function isAnagram(s: string, t: string): boolean {
  return anagram(makeStringMap(s), makeStringMap(t));
}
