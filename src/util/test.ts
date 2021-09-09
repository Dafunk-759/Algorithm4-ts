import _ from "lodash";

export function test<T extends (...args: any) => any>(
  func: T,
  returnVal: ReturnType<T>,
  ...args: Parameters<T>
): void {
  const ret = func.apply(null, args);

  if (_.isEqual(ret, returnVal)) {
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
        )}\nreturnVal: ${ret}\nexcept: ${returnVal}\n`
    );
  }
}
