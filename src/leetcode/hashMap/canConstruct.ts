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

function can(
  s: Map<string, number>,
  t: Map<string, number>
) {
  for (const [key, value] of s) {
    if (!t.has(key) || (t.get(key) as number) < value) {
      return false;
    }
  }
  return true;
}

function canConstruct(
  ransomNote: string,
  magazine: string
): boolean {
  return can(
    makeStringMap(ransomNote),
    makeStringMap(magazine)
  );
}
