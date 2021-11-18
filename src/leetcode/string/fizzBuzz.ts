const fizzBuzz = (n: number): string[] => {
  const ret:string[] = []
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0) ret[i - 1] = 'FizzBuzz'
    else if(i % 3 === 0) ret[i - 1] = 'Fizz'
    else if(i % 5 === 0) ret[i - 1] = 'Buzz'
    else ret[i - 1] = String(i)
  }

  return ret
}