const singles = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine'
]
const teens = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen'
]
const tens = [
  '',
  'Ten',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety'
]
const thousands = ['', 'Thousand', 'Million', 'Billion']
const recur = (curr: string[], num: number) => {
  if (num === 0) return
  if (num < 10) {
    curr.push(singles[num])
    curr.push(' ')
  } else if (num < 20) {
    curr.push(teens[num - 10])
    curr.push(' ')
  } else if (num < 100) {
    curr.push(tens[Math.floor(num / 10)])
    curr.push(' ')
    recur(curr, num % 10)
  } else {
    curr.push(singles[Math.floor(num / 100)])
    curr.push(' Hundred ')
    recur(curr, num % 100)
  }
}
const numberToWords = (num: number): string => {
  if (num === 0) return 'Zero'
  const ret: string[] = []
  for (let i = 3, uint = 1e9; i >= 0; i--, uint /= 1e3) {
    const currNum = Math.floor(num / uint)
    if(currNum !== 0) {
      num -= currNum * uint
      const curr:string[] = []
      recur(curr, currNum)
      curr.push(thousands[i])
      curr.push(' ')
      ret.push(...curr)
    }
  }

  return ret.join('').trim()
}
