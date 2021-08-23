import fs from "fs";
import path from "path";

export function write(
  value: unknown,
  fileName?: string
): void {
  if (fileName) {
    fs.writeFileSync(
      path.resolve("static", fileName),
      value as string
    );
  } else {
    console.log(value);
  }
}
