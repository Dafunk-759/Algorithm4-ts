function evalRPN(tokens: string[]): number {
  const isNumber = (c: string) =>
    Number.isInteger(Number(c));
  const isOp = (c: string) =>
    c === "+" || c === "-" || c === "*" || c === "/";
  const error = (msg: string) => {
    throw new Error(msg);
  };
  const loop = (index: number, stack: number[]): number => {
    if (index >= tokens.length) return stack[0];
    const c = tokens[index];
    if (isNumber(c)) {
      stack.push(Number(c));
      return loop(index + 1, stack);
    }
    if (!isOp(c)) error("only '+' '-' '*' '/'");
    if (stack.length < 2) error("tokens not valid");
    const o2 = stack.pop() as number,
      o1 = stack.pop() as number;
    if (c === "+") {
      stack.push(o1 + o2);
    } else if (c === "-") {
      stack.push(o1 - o2);
    } else if (c === "*") {
      stack.push(o1 * o2);
    } else if (c === "/") {
      if (o2 === 0) error("can not divide by 0");
      stack.push(Math.trunc(o1 / o2));
    }
    return loop(index + 1, stack);
  };
  return loop(0, []);
}

console.log(
  evalRPN(["2", "1", "+", "3", "*"]),
  evalRPN(["4", "13", "5", "/", "+"]),
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ])
);
