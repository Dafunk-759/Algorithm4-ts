function force() {
  return function search(pat: string, txt: string) {
    const M = pat.length;
    const N = txt.length;

    for (let i = 0; i <= N - M; i++) {
      let j: number;
      for (j = 0; j < M; j++) {
        if (txt.charAt(i + j) !== pat.charAt(j)) {
          break;
        }
      }
      if (j === M) return i;
    }
    return N;
  };
}

function fastForce() {
  return function search(pat: string, txt: string) {
    const M = pat.length;
    const N = txt.length;
    let i: number, j: number;

    for (i = 0, j = 0; i < N && j < M; i++) {
      if (txt.charAt(i) === pat.charAt(j)) j++;
      else {
        i -= j;
        j = 0;
      }
    }

    return j === M ? i - M : N;
  };
}

function test() {
  const search = force();
  const fSearch = fastForce();

  console.log(search("ABRA", "ABACADABRAC"));
  console.log(fSearch("ABRA", "ABACADABRAC"));
}

test();
