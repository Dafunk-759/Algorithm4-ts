const splitByLR = (s: string) =>
  s.split(/([L|R]+)/).filter((s) => s.length > 0);
const toRL = (word: string) => {
  const letters = word.split("");
  for (let l = 0, r = letters.length - 1; l < r; l++, r--) {
    letters[l] = "R";
    letters[r] = "L";
  }
  return letters.join("");
};
const transform = (
  word: string,
  leftChar: string | undefined,
  rightChar: string | undefined
) => {
  if (word[0] !== ".") return word;
  if (leftChar === undefined && rightChar === undefined)
    return word;
  if (leftChar === undefined) {
    return rightChar === "L"
      ? rightChar.repeat(word.length)
      : word;
  }
  if (rightChar === undefined) {
    return leftChar === "R"
      ? leftChar.repeat(word.length)
      : word;
  }
  if (leftChar === "L" && rightChar === "R") return word;
  if (leftChar === rightChar)
    return leftChar.repeat(word.length);
  return toRL(word);
};
const toNextDominoes =
  (d: string[]) => (word: string, i: number) => {
    const leftChar =
      d[i - 1] && d[i - 1][d[i - 1].length - 1];
    const rightChar = d[i + 1] && d[i + 1][0];
    return transform(word, leftChar, rightChar);
  };
const pushDominoes = (dominoes: string): string => {
  const d = splitByLR(dominoes);
  return d.map(toNextDominoes(d)).join("");
};
