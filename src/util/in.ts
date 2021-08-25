import fs from "fs";
import path from "path";

const args: string[] = process.argv.slice(2);

export function read(
  filename?: string,
  mode: "string" | "number" = "string"
): string[] | number[] {
  let ret: string[] | number[] = args;
  if (filename) {
    ret = fs
      .readFileSync(path.resolve("static", filename), {
        encoding: "utf-8",
      })
      .match(/[\w|-]+/g) as string[];
  }
  return mode === "number"
    ? ret.map((value) => Number(value))
    : ret;
}
