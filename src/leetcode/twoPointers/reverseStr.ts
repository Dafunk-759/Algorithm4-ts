const groupBy = (n: number) => (s: string) => {
  const ret: string[] = [];
  for (let i = 0; i <= s.length; i += n) {
    ret.push(s.slice(i, i + n));
  }
  return ret;
};
const reverse = (s: string) =>
  s.split("").reverse().join("");
const toReverse = (k: number) => (s: string) => {
  if (s.length <= k) return reverse(s);
  const preK = s.slice(0, k);
  return reverse(preK) + s.slice(k);
};
function reverseStr(s: string, k: number): string {
  return groupBy(2 * k)(s)
    .map(toReverse(k))
    .join("");
}
