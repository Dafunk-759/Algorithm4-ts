type BackTracking = (
  start: number,
  collection: number[],
  cb: (item: number[]) => any
) => void;
function combinationSum3(k: number, n: number): number[][] {
  const M = 9;
  const backTracking: BackTracking = (
    start,
    collection,
    cb
  ) => {
    if (collection.length === k) {
      cb(collection);
      return;
    }
    for (let i = start; i <= M; i++) {
      backTracking(i + 1, collection.concat(i), cb);
    }
  };
  const filterReduce = () => {
    const ret: number[][] = [];
    const isEqN = (arr: number[]) =>
      arr.reduce((acc, curr) => acc + curr) === n;
    backTracking(1, [], (collection) => {
      if (isEqN(collection)) {
        ret.push(collection);
      }
    });
    return ret;
  };
  return filterReduce();
}
console.log(combinationSum3(3, 9));
