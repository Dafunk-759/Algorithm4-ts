import * as util from "../../util/indexNode.js";

//leet-code 69
// x >= 0
//暴力
// function mySqrt(x: number): number {
//   let y = 0;
//   while (true) {
//     if (y ** 2 <= x) {
//       y += 1;
//     } else {
//       break;
//     }
//   }
//   return y - 1;
// }
//Newton 迭代法
//牛顿迭代法具体意思为求一个方程的根的方法
//本题意思为解一个方程 x**2 = a(a为输入)
//根据公式 f(n+1) = Xn - f(Xn)/f'(Xn)
//带入求解得到递推公式 Xn+1 = 1/2(Xn + a/Xn)
function mySqrt(x: number): number {
  const a = x;
  function sqrt(curr: number): number {
    if (curr === 0) return 0;

    const next = (1 / 2) * (curr + a / curr);
    if (Math.abs(next - curr) <= Number.EPSILON)
      return next;

    return sqrt(next);
  }
  const halfX = x === 1 ? 1 : x >> 1;
  return sqrt(halfX) >> 0;
}

// util.test(mySqrt, 2, 4);
// util.test(mySqrt, 2, 8);
util.test(mySqrt, 0, 0);
