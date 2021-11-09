const reversePrefix = (
  word: string,
  ch: string
): string => {
  const i = word.indexOf(ch)
  return (
    word
      .slice(0, i + 1)
      .split('')
      .reverse()
      .join('') + word.slice(i + 1)
  )
}
