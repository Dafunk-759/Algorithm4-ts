function wordBreak(
  s: string,
  wordDict: string[]
): boolean {
  const bag = new Array(s.length + 1).fill(false);
  bag[0] = true;
  for(let v = 0; v <= s.length; v++) {
    for(const word of wordDict) {
      const l = word.length;
      if(v >= l) {
        const targetStr = s.slice(0, v).slice(-l);
        bag[v] = bag[v] || bag[v - l] && targetStr === word;
      }
    }
  }
  return bag[bag.length - 1];
}
//暴力回溯 超时
function wordBreakB(
  s: string,
  wordDict: string[]
): boolean {
  const backtracking = (subStr:string):boolean => {
    if(subStr.length >= s.length) {
      return subStr === s;
    }
    for(const word of wordDict) {
      if(backtracking(subStr + word)) return true;
    }
    return false;
  }
  return backtracking("");
}
