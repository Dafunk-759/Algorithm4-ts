const reset = (
  chars: string[],
  lastIndex: number,
  start: number,
  end: number
) => {
  const count = end - start;
  const char = chars[start];
  chars[lastIndex++] = char;
  if (count <= 1) return lastIndex;
  for (const n of String(count)) {
    chars[lastIndex++] = n;
  }
  return lastIndex;
};
const next = (chars: string[], i: number, j: number) => {
  if (chars[i] === chars[j]) return [i, j + 1];
  return [j, j];
};
function compress(chars: string[]): number {
  let lastIndex = 0;
  for (
    let i = 0, j = 0;
    i < chars.length;
    [i, j] = next(chars, i, j)
  ) {
    if (chars[i] !== chars[j]) {
      lastIndex = reset(chars, lastIndex, i, j);
    }
  }
  return lastIndex;
}
