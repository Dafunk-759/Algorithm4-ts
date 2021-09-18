/** 暴力法*/
function threeSumStream(nums: number[]): number[][] {
  type Stream = Generator<number[], void, unknown>;
  const makeStream = function* (arr: number[]) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
          yield [arr[i], arr[j], arr[k]];
        }
      }
    }
  };
  const filter = function* (s: Stream) {
    const isSumZero = (a: number, b: number, c: number) =>
      a + b + c === 0;
    for (const [a, b, c] of s) {
      if (isSumZero(a, b, c)) {
        yield [a, b, c].sort((a, b) => a - b);
      }
    }
  };
  const accumulator = (s: Stream) => {
    const map = new Map<string, number[]>();
    for (const val of s) {
      map.set(val.join(""), val);
    }
    return Array.from(map.values());
  };

  return accumulator(filter(makeStream(nums)));
}
/** 改进版 */
function threeSum(nums: number[]): number[][] {
  type ThSum = (
    i: number,
    left: number,
    right: number,
    ret: number[][]
  ) => number[][];
  type InnerLoop = (
    i: number,
    left: number,
    right: number,
    ret: number[][]
  ) => void;
  type IsGreater = (
    i: number,
    left: number,
    right: number
  ) => boolean;
  type IsLower = (
    i: number,
    left: number,
    right: number
  ) => boolean;
  type AddRet = (
    i: number,
    left: number,
    right: number,
    ret: number[][]
  ) => void;
  type GetNext = (right: number, left: number) => number;

  const isGreater: IsGreater = (i, left, right) =>
    nums[i] + nums[left] + nums[right] > 0;
  const isLower: IsLower = (i, left, right) =>
    nums[i] + nums[left] + nums[right] < 0;
  const addRet: AddRet = (i, left, right, ret) =>
    ret.push([nums[i], nums[left], nums[right]]);
  const nextRightWhenEq: GetNext = (right, left) => {
    if (right <= left) return right - 1;
    if (nums[right] !== nums[right - 1]) return right - 1;
    return nextRightWhenEq(right - 1, left);
  };
  const nextLeftWhenEq: GetNext = (right, left) => {
    if (right <= left) return left + 1;
    if (nums[left] !== nums[left + 1]) return left + 1;
    return nextLeftWhenEq(right, left + 1);
  };
  const innerLoop: InnerLoop = (i, left, right, ret) => {
    if (left >= right) return;
    if (isLower(i, left, right))
      return innerLoop(i, left + 1, right, ret);
    if (isGreater(i, left, right))
      return innerLoop(i, left, right - 1, ret);
    addRet(i, left, right, ret);
    return innerLoop(
      i,
      nextLeftWhenEq(right, left),
      nextRightWhenEq(right, left),
      ret
    );
  };
  const thSum: ThSum = (i, left, right, ret) => {
    if (i >= right) return ret;
    if (nums[i] > 0) {
      return ret;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      return thSum(i + 1, i + 2, right, ret);
    }
    innerLoop(i, left, right, ret);
    return thSum(i + 1, i + 2, right, ret);
  };
  nums.sort((a, b) => a - b);
  return thSum(0, 1, nums.length - 1, []);
}
