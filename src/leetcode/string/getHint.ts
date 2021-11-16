const getHint = (
  secret: string,
  guess: string
): string => {
  const secretLeft:string[] = []
  const guessLeft:string[] = []
  let bulls = 0
  for(let i = 0; i < secret.length; i++) {
    if(secret[i] === guess[i]) {
      bulls++
    }else {
      secretLeft.push(secret[i])
      guessLeft.push(guess[i])
    }
  }

  let cows = 0
  for(const g of guessLeft) {
    const i = secretLeft.indexOf(g)
    if(i !== -1) {
      cows++
      secretLeft.splice(i, 1)
    }
  }

  return `${bulls}A${cows}B`
}
