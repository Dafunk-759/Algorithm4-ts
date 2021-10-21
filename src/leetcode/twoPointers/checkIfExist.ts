const check = (arr: number[]) => {
  let p = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    while (p < arr.length && arr[p] < 2 * n) p++;
    if (arr[p] === 2 * n && p !== i) return true;
  }
  return false;
};
const gt0 = (n: number) => n >= 0;
const lt0 = (n: number) => n < 0;
const byAsc = (a: number, b: number) => a - b;
const toAbs = (n: number) => Math.abs(n);
const checkIfExist = (arr: number[]): boolean => {
  return (
    check(arr.filter(gt0).sort(byAsc)) ||
    check(arr.filter(lt0).map(toAbs).sort(byAsc))
  );
};
