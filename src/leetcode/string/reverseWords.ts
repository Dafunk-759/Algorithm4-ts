//use lib
function reverseWordsLib(s: string): string {
  return s
    .trim()
    .split(" ")
    .reverse()
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .join(" ");
}
//no lib
function reverseWords(s: string): string {
  const isStackEmpty = (stack: string[]) =>
    stack.length === 0;
  const isSpace = (s: string) => s === " ";
  const peekTop = (stack: string[]) =>
    stack[stack.length - 1];
  const makeStack = (
    i: number,
    stack: string[]
  ): string[] => {
    const c = s.charAt(i);
    if (i >= s.length) return stack;
    if (isSpace(c) && isStackEmpty(stack))
      return makeStack(i + 1, stack);
    if (isSpace(c) && isSpace(peekTop(stack)))
      return makeStack(i + 1, stack);
    if (isSpace(c) && !isSpace(peekTop(stack))) {
      stack.push(c);
      return makeStack(i + 1, stack);
    }
    if (!isSpace(c) && isStackEmpty(stack)) {
      stack.push(c);
      return makeStack(i + 1, stack);
    }
    if (!isSpace(c) && isSpace(peekTop(stack))) {
      stack.push(c);
      return makeStack(i + 1, stack);
    }
    if (!isSpace(c) && !isSpace(peekTop(stack))) {
      stack.push(stack.pop() + c);
      return makeStack(i + 1, stack);
    }
    return stack;
  };
  const removeLastSpace = (stack: string[]): string[] => {
    if (isStackEmpty(stack)) return stack;
    const last = stack.pop() as string;
    if (!isSpace(last)) {
      stack.push(last);
      return stack;
    }
    return removeLastSpace(stack);
  };
  const stackToString = (
    stack: string[],
    ret: string
  ): string => {
    if (isStackEmpty(stack)) return ret;
    return stackToString(stack, ret + stack.pop());
  };
  return stackToString(
    removeLastSpace(makeStack(0, [])),
    ""
  );
}
console.log(reverseWords("a good   example"));
