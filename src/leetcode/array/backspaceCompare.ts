// leet-code 844
import * as util from "../../util/indexNode.js";

function backspaceCompare(s: string, t: string): boolean {
  function normalize(s: string): string {
    const stack: string[] = [];
    for (const c of s) {
      if (c !== "#") {
        stack.push(c);
      } else if (c === "#") {
        if (stack.length > 0) {
          stack.pop();
        }
      }
    }
    return stack.join("");
  }

  return normalize(s) === normalize(t);
}

util.test(backspaceCompare, true, "ab#c", "ad#c");
util.test(backspaceCompare, true, "ab##", "c#d#");
util.test(backspaceCompare, true, "a##c", "#a#c");
