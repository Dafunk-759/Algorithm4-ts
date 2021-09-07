const R = 256;

function makeDFA(pat: string) {
  const M = pat.length;
  const dfa: number[][] = new Array<number[]>(R);
  for (let i = 0; i < R; i++) {
    dfa[i] = new Array<number>(M);
  }

  dfa[pat.charCodeAt(0)][0] = 1;
  for (let X = 0, j = 1; j < M; j++) {
    for (let c = 0; c < R; c++) {
      dfa[c][j] = dfa[c][X];
    }
    dfa[pat.charCodeAt(j)][j] = j + 1;
    X = dfa[pat.charCodeAt(j)][X];
  }
}
