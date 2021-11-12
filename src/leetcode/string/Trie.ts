interface TrieNode {
  isEnd: boolean
  next: (TrieNode | null)[]
}
const mkTrieNode = (isEnd: boolean = false): TrieNode => {
  const next: (TrieNode | null)[] = new Array(26).fill(null)
  return { isEnd, next }
}
const toIndex = (c: string) => c.charCodeAt(0) - 97

export class Trie {
  private readonly root: TrieNode
  constructor() {
    this.root = mkTrieNode()
  }

  insert(word: string): void {
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

  private searchPrefix(prefix: string): TrieNode | null {
    let node: TrieNode | null = this.root
    for (const c of prefix) {
      node = node.next[toIndex(c)]
      if (node === null) return null
    }
    return node
  }

  search(word: string): boolean {
    const ret = this.searchPrefix(word)
    return ret === null ? false : ret.isEnd
  }

  startsWith(prefix: string): boolean {
    return this.searchPrefix(prefix) !== null
  }
}

