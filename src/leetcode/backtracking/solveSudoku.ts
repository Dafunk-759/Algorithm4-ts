/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  const isValid = (
    row: number,
    col: number,
    n: string,
    board: string[][]
  ): boolean => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === n) return false;
    }
    for (let j = 0; j < 9; j++) {
      if (board[j][col] === n) return false;
    }
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      // 判断9方格里是否重复
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === n) {
          return false;
        }
      }
    }
    return true;
  };
  const M = board.length;
  const N = board[0].length;
  const backtracking = (board: string[][]): boolean => {
    for (let r = 0; r < M; r++) {
      for (let c = 0; c < N; c++) {
        if (board[r][c] !== ".") continue;
        for (let k = 1; k <= 9; k++) {
          if (!isValid(r, c, String(k), board)) continue;
          board[r][c] = String(k);
          if (backtracking(board)) return true;
          board[r][c] = ".";
        }
        return false;
      }
    }
    return true;
  };
  backtracking(board);
}
