/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  const loop = (left: number, right: number): void => {
    if (left >= right) return;
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    return loop(left + 1, right - 1);
  };
  loop(0, s.length - 1);
}
const ret = ["H", "a", "n", "n", "a", "h"];
reverseString(ret);
console.log(ret);
