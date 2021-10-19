const splitBy = (c: string, s: string) => {
  const reg = new RegExp(`(${c}+)`);
  return s.split(reg).filter((w) => w.length > 0);
};
const shortestToChar = (s: string, c: string): number[] => {
  const words = splitBy(c, s);
  const ret: number[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === c) ret.push(0);
      else if (i === 0) {
        ret.push(word.length - j);
      } else if (i === words.length - 1) {
        ret.push(j + 1);
      } else {
        ret.push(Math.min(j + 1, word.length - j));
      }
    }
  }
  return ret;
};
