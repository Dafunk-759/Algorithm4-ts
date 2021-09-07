function isEqual(arg1: unknown, arg2: unknown): boolean {
  if (
    typeof arg1 !== "object" &&
    typeof arg2 !== "object"
  ) {
    return arg1 === arg2;
  } else if (
    arg1 !== null &&
    arg2 !== null &&
    typeof arg1 === "object" &&
    typeof arg2 === "object"
  ) {
    const keys1 = Object.keys(arg1 as object);
    const keys2 = Object.keys(arg2 as object);

    return (
      keys1.every(
        (key) =>
          (arg1 as Record<string, any>)[key] ===
          (arg2 as Record<string, any>)[key]
      ) &&
      keys2.every(
        (key) =>
          (arg1 as Record<string, any>)[key] ===
          (arg2 as Record<string, any>)[key]
      )
    );
  } else {
    return false;
  }
}

export function test<T extends (...args: any) => any>(
  func: T,
  returnVal: ReturnType<T>,
  ...args: Parameters<T>
): void {
  const ret = func.apply(null, args);

  if (isEqual(ret, returnVal)) {
    console.log(
      `test success!\nfunc: ${func.name}\nargs: ${(
        args as []
      )
        .map((arg, index) => `arg${index}: ${arg}`)
        .join(" ")}\nreturnVal: ${ret}\n`
    );
  } else {
    console.log(
      `test fail.\nfunc: ${func.name}\nargs: ${(args as [])
        .map((arg, index) => `arg${index}: ${arg}`)
        .join(
          " "
        )}\nreturnVal: ${ret}\nexcept: ${returnVal}`
    );
  }
}
