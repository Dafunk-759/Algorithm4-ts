const toReverse = (s: string) =>
  s.split("").reverse().join("");
function reverseWords(s: string): string {
  return s.split(" ").map(toReverse).join(" ");
}
