const map: Record<string, string> = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
type BackTacking = (
  start: number,
  collection: string
) => void;

function letterCombinations(digits: string): string[] {
  const max = digits.length;
  const ret: string[] = [];
  const backTacking: BackTacking = (index, collection) => {
    if (max === 0) return;
    if (collection.length === max) {
      ret.push(collection);
      return;
    }
    for (const c of map[digits.charAt(index)]) {
      backTacking(index + 1, collection + c);
    }
  };
  backTacking(0, "");
  return ret;
}

console.log(letterCombinations("23"));
