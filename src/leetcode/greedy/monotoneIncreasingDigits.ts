//force
function monotoneIncreasingDigits(n: number): number {
  const isIncreasing = (n: number) => {
    const s = String(n);
    for (
      let curr = 0, next = 1;
      next < s.length;
      curr = next, next += 1
    ) {
      const x = Number(s.charAt(curr));
      const y = Number(s.charAt(next));
      if (x > y) return false;
    }
    return true;
  };
  for (let i = n; i >= 0; i--) {
    if (isIncreasing(i)) return i;
  }
  throw new Error("shouldn't be here");
}
//greedy
function monotoneIncreasingDigitsG(n: number): number {
  const s = Array.from(String(n));
  let flag = s.length;
  for (
    let curr = s.length - 1, pre = s.length - 2;
    pre >= 0;
    curr = pre, pre -= 1
  ) {
    if (s[curr] < s[pre]) {
      s[curr] = "9";
      flag = curr;
      s[pre] = String(Number(s[pre]) - 1);
    }
  }
  for (let i = flag; i < s.length; i++) {
    s[i] = "9";
  }
  return Number(s.join(""));
}
