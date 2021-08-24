//Dijkstra双栈算术表达式求值算法
import { Stack } from "./stack.js";

function evaluate(args: string[]): void {
  const ops = new Stack<string>();
  const vals = new Stack<number>();

  for (let s of args) {
    if (s === "+") ops.push(s);
    else if (s === "-") ops.push(s);
    else if (s === "*") ops.push(s);
    else if (s === "/") ops.push(s);
    else if (s === "sqrt") ops.push(s);
    else if (s === ")") {
      const op = ops.pop() as string;
      let v = vals.pop() as number;
      if (op === "+") v = (vals.pop() as number) + v;
      else if (op === "-") v = (vals.pop() as number) - v;
      else if (op === "*") v = (vals.pop() as number) * v;
      else if (op === "/") v = (vals.pop() as number) / v;
      else if (op === "sqrt") v = Math.sqrt(v);
      vals.push(v);
    } else if (s !== "(") {
      vals.push(Number(s));
    }
  }
  console.log(vals.pop());
}

//test
evaluate("( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )".split(" "));
//101
evaluate("( ( 1 + sqrt ( 5.0 ) ) / 2.0 )".split(" "));
//1.618033988749895
