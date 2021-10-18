const countOne = (s: string, n: number) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "1") count += 1;
  }
  return count;
};
const nextNum = (n: string) => (n === "1" ? "2" : "1");
function magicalString(n: number): number {
  let s = "122";
  let t = "122";
  for (let p1 = 3, p2 = 2; p1 < n; p2++) {
    const append = nextNum(s[p1 - 1]).repeat(Number(t[p2]));
    s += append;
    t += append;
    p1 += append.length;
  }
  return countOne(s, n);
}
