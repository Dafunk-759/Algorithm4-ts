// 77
type BackTracking = (
  start: number,
  collected: number[]
) => void;
type EnumFrom = (
  start: number,
  collected: number[]
) => void;
function combine(n: number, k: number): number[][] {
  const ret: number[][] = [];
  const backtracking: BackTracking = (start, collected) => {
    if (collected.length === k) {
      ret.push(collected);
      return;
    }
    enumFrom(start, collected);
  };
  const enumFrom: EnumFrom = (start, collected) => {
    if (start > n - (k - collected.length) + 1) return;
    backtracking(start + 1, collected.concat(start));
    enumFrom(start + 1, collected);
  };
  backtracking(1, []);
  return ret;
}

console.log(combine(4, 2));
