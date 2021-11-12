interface TrieNode {
  isEnd: boolean
  next: (TrieNode | null)[]
}
const mkTrieNode = (isEnd = false): TrieNode => {
  const next: (TrieNode | null)[] = new Array(26).fill(null)
  return { isEnd, next }
}
const toIndex = (c: string) => c.charCodeAt(0) - 97

class WordDictionary {
  private root: TrieNode
  constructor() {
    this.root = mkTrieNode()
  }

  addWord(word: string): void {
    let node = this.root
    for (const c of word) {
      const i = toIndex(c)
      if (node.next[i] === null) {
        node.next[i] = mkTrieNode()
      }
      node = node.next[i] as TrieNode
    }
    node.isEnd = true
  }
  private searchPrefix(word: string, node: TrieNode) {
    if (word.length <= 0) return node.isEnd

    for (let i = 0; i < word.length; i++) {
      const c = word[i]
      if (c === '.') {
        for (const n of node.next) {
          if (n === null) continue
          if (this.searchPrefix(word.slice(i + 1), n))
            return true
        }
        return false
      } else {
        const index = toIndex(c)
        if (node.next[index] === null) return false
        node = node.next[index] as TrieNode
      }
    }
    return node.isEnd
  }
  search(word: string): boolean {
    return this.searchPrefix(word, this.root)
  }
}
