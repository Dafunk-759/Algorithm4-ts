function isValid(s: string): boolean {
  const isLeft = (s: string) =>
    s === "(" || s === "{" || s === "[";
  const isRight = (s: string) =>
    s === ")" || s === "}" || s === "]";
  const isCouple = (s1: string, s2: string): boolean =>
    (s1 === "(" && s2 === ")") ||
    (s1 === "{" && s2 === "}") ||
    (s1 === "[" && s2 === "]");
  const isStackEmpty = (s: string[]): boolean =>
    s.length === 0;
  const loop = (
    index: number,
    stack: string[]
  ): boolean => {
    if (index >= s.length) return isStackEmpty(stack);
    const c = s.charAt(index);
    if (isLeft(c)) {
      stack.push(c);
      return loop(index + 1, stack);
    }
    if (isRight(c) && isStackEmpty(stack)) return false;
    if (isRight(c) && !isStackEmpty(stack)) {
      if (!isCouple(stack.pop() as string, c)) return false;
      return loop(index + 1, stack);
    }
    throw new Error("bad example");
  };
  return loop(0, []);
}

console.log(
  isValid("()"),
  isValid("()[]{}"),
  isValid("(]"),
  isValid("([)]"),
  isValid("{[]}")
);
