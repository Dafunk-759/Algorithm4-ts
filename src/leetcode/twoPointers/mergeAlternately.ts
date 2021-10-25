 const mergeAlternately = (
  word1: string,
  word2: string
): string => {
  let ret = "";
  let p1: number, p2: number;
  for (
    p1 = 0, p2 = 0;
    p1 < word1.length && p2 < word2.length;
    p1++, p2++
  ) {
    ret += word1[p1] + word2[p2];
  }
  return p1 >= word1.length
    ? ret + word2.slice(p2)
    : ret + word1.slice(p1);
};
