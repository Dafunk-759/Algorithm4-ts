const toLetters = (word: string) => {
  const ret: string[] = [];
  for (let l = 0, r = 0; r < word.length; l = r) {
    while (word[r] === word[l]) r++;
    ret.push(word.slice(l, r));
  }
  return ret;
};
const isValid = (target: string[], letters: string[]) => {
  if (target.length !== letters.length) return false;
  for (let i = 0; i < target.length; i++) {
    if (target[i][0] !== letters[i][0]) return false;
    if (
      target[i].length < 3 &&
      target[i].length !== letters[i].length
    )
      return false;
    if (
      target[i].length >= 3 &&
      target[i].length < letters[i].length
    )
      return false;
  }
  return true;
};
const expressiveWords = (
  s: string,
  words: string[]
): number => {
  const target = toLetters(s);
  const wordsLetters = words.map(toLetters);
  let count = 0;
  for (const letters of wordsLetters) {
    if (isValid(target, letters)) count++;
  }
  return count;
};
