import { Trie } from './Trie.js'

const findWords = (
  board: string[][],
  words: string[]
): string[] => {
  const M = board.length
  const N = board[0].length

  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }

  const ret = new Set<string>()
  const mark: boolean[][] = new Array(M)
    .fill(0)
    .map((_) => new Array(N).fill(false))
  const resetMark = () => {
    for(let i = 0; i < M; i++) {
      for(let j = 0; j < N; j++) {
        mark[i][j] = false
      }
    }
  }

  const dfs = (
    row: number,
    col: number,
    curWord: string
  ) => {
    if (row >= M || col >= N || row < 0 || col < 0) return
    if (mark[row][col]) return

    curWord += board[row][col]
    if (!trie.startsWith(curWord)) return
    if (trie.search(curWord)) ret.add(curWord)

    mark[row][col] = true
    dfs(row + 1, col, curWord)
    dfs(row, col + 1, curWord)
    dfs(row - 1, col, curWord)
    dfs(row, col - 1, curWord)
    mark[row][col] = false
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      resetMark()
      dfs(i, j, '')
    }
  }

  return Array.from(ret)
}
