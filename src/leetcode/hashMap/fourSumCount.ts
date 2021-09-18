function fourSumCountStream(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  type Stream = Generator<number[], void, unknown>;
  const enumSquareN = function* (n: number) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        yield [i, j];
      }
    }
  };
  const mkMap = (s: Stream) => {
    const map = new Map<number, number>();
    for (const [i, j] of s) {
      const target = nums1[i] + nums2[j];
      if (!map.has(target)) map.set(target, 1);
      else map.set(target, (map.get(target) as number) + 1);
    }
    return map;
  };
  const getCount = (n: number) => {
    const map = mkMap(enumSquareN(n));
    let count = 0;
    for (const [i, j] of enumSquareN(n)) {
      const target = -(nums3[i] + nums4[j]);
      if (map.has(target))
        count += map.get(target) as number;
    }
    return count;
  };
  return getCount(nums1.length);
}

function fourSumCountFor(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const enumSquareN = (
    n: number,
    cb: (i: number, j: number) => any
  ) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        cb(i, j);
      }
    }
  };
  const mkMap = (n: number) => {
    const map = new Map<number, number>();
    enumSquareN(n, (i, j) => {
      const target = nums1[i] + nums2[j];
      if (!map.has(target)) map.set(target, 1);
      else map.set(target, (map.get(target) as number) + 1);
    });
    return map;
  };
  const getCount = (n: number) => {
    const map = mkMap(n);
    let count = 0;
    enumSquareN(n, (i, j) => {
      const target = -(nums3[i] + nums4[j]);
      if (map.has(target))
        count += map.get(target) as number;
    });
    return count;
  };
  return getCount(nums1.length);
}

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  const enumSquareN = (n: number) =>
    Array(n)
      .fill(1)
      .flatMap((_, i) =>
        Array(n)
          .fill(1)
          .map((_, j) => [i, j])
      );
  const makeMap = (n: number) =>
    enumSquareN(n).reduce((map, [i, j]) => {
      const target = nums1[i] + nums2[j];
      if (!map.has(target)) map.set(target, 1);
      else map.set(target, (map.get(target) as number) + 1);
      return map;
    }, new Map<number, number>());
  const getCount = (n: number, map: Map<number, number>) =>
    enumSquareN(n).reduce((count, [i, j]) => {
      const target = -(nums3[i] + nums4[j]);
      if (map.has(target))
        count += map.get(target) as number;
      return count;
    }, 0);

  const n = nums1.length;
  return getCount(n, makeMap(n));
}
