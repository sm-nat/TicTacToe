

const TURNS = { // turnos
    X: '❌',
    O: '⭕️'
  }
  // rutas ganadoras
const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

const checkWinnerFrom = (boardToCheck) => {
    //logica para ver al ganador
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganador
    return null
  }

    const checkEndGame = (newBoard) => {
      return newBoard.every((square) => square !== null)
    }

    export { checkWinnerFrom, checkEndGame, TURNS, WINNER_COMBOS };
    