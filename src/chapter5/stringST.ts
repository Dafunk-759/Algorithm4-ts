interface TrieST<Value> {
  get(key: string): Value | null;
  put(key: string, val: Value): void;
  delete(key: string): void;
  size(): number;
  keysWithPrefix: (pre: string) => string[];
  keys(): string[];
}

function makeTrieST<Value>(): TrieST<Value> {
  const R = 256;
  let root: TreeNode | null = null;

  interface TreeNode {
    val: Value | null;
    next: (TreeNode | null)[];
  }

  function makeNode(R: number): TreeNode {
    return {
      val: null,
      next: new Array<TreeNode | null>(R).fill(null),
    };
  }

  function get(
    x: TreeNode | null,
    key: string,
    d: number
  ): TreeNode | null {
    if (x === null) return null;
    if (d === key.length) return x;
    let c = key.charCodeAt(d);
    return get(x.next[c], key, d + 1);
  }
  function put(
    x: TreeNode | null,
    key: string,
    val: Value,
    d: number
  ) {
    if (x === null) x = makeNode(R);
    if (d === key.length) {
      x.val = val;
      return x;
    }
    const c = key.charCodeAt(d);
    x.next[c] = put(x.next[c], key, val, d + 1);
    return x;
  }
  function size(x: TreeNode | null): number {
    if (x === null) return 0;
    let cnt = 0;
    if (x.val !== null) cnt += 1;
    for (let c = 0; c < R; c++) {
      cnt += size(x.next[c]);
    }
    return cnt;
  }
  function collect(
    x: TreeNode | null,
    pre: string,
    q: string[]
  ): void {
    if (x === null) return;
    if (x.val !== null) q.push(pre);
    for (let c = 0; c < R; c++) {
      collect(x.next[c], pre + String.fromCharCode(c), q);
    }
  }
  function keysWithPrefix(pre: string) {
    const q: string[] = [];
    collect(get(root, pre, 0), pre, q);
    return q;
  }
  function deleteNode(
    x: TreeNode | null,
    key: string,
    d: number
  ): TreeNode | null {
    if (x === null) return null;
    if (d === key.length) x.val = null;
    else {
      const c = key.charCodeAt(d);
      x.next[c] = deleteNode(x.next[c], key, d + 1);
    }
    if (x.val !== null) return x;
    for (let c = 0; c < R; c++) {
      if (x.next[c] !== null) return x;
    }
    return null;
  }

  return {
    get(key: string): Value | null {
      const x = get(root, key, 0);
      if (x === null) return null;
      return x.val as Value;
    },
    put(key: string, val: Value) {
      root = put(root, key, val, 0);
    },
    delete(key: string) {
      root = deleteNode(root, key, 0);
    },
    size() {
      return size(root);
    },
    keysWithPrefix,
    keys() {
      return keysWithPrefix("");
    },
  };
}

function test() {
  const input = [
    "she",
    "sells",
    "sea",
    "shells",
    "by",
    "the",
    "sea",
    "shore",
  ];
  const st = makeTrieST<number>();
  input.forEach((s, i) => {
    st.put(s, i);
    console.log("key: ", s, "val: ", st.get(s));
  });

  st.keys().forEach((key) => {
    console.log(`key: ${key}, val: ${st.get(key)}`);
  });

  console.log("size: ", st.size());

  st.delete("the");
  
  st.keys().forEach((key) => {
    console.log(`key: ${key}, val: ${st.get(key)}`);
  });

  console.log("size: ", st.size());
}

test();
