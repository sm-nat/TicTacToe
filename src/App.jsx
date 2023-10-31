import './App.css'
import './index.css'
import { Square } from './Square'
import { checkWinnerFrom, checkEndGame, WINNER_COMBOS } from './board'
import { WinnerModal } from './WinnerModal'
import { TURNS } from './board'
import React, { useState } from 'react'
import { Players } from './Players'

function App() {

  //seleccion jugador
  const [players, setPlayers] = useState({
    playerXName: '',
    playerOName: '',
    playerXSymbol: 'X',
    playerOSymbol: 'O',
  });

  const handlePlayersSelected = (playerXName, playerOName, playerXSymbol, playerOSymbol) => {
    setPlayers({ playerXName, playerOName, playerXSymbol, playerOSymbol });
  };


  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  // si no hay ganador o empate
  const [winner, setWinner] = useState(null)

  //reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }


  const updateBoard = (index) => {

    if (board[index] || winner) return // esto es para que no sobrescriba
    //actualizar el board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)


    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }

  return (
    <main className='board'>

      <h1>🐱 Tic Tac Toe 🐱</h1>

      {players.playerXName && players.playerOName ? (

        <>
          <section className='game'>

            {board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              )
            })}
          </section>
          <section className='turn'>
            <Square isSelected={turn === TURNS.X}>
              {TURNS.X} <p> {players.playerXName}</p>
            </Square>
            <Square isSelected={turn === TURNS.O}>
              {TURNS.O} <p>{players.playerOName}</p>
            </Square>
          </section>
        </>
      ) : (
        <Players onPlayersSelected={handlePlayersSelected} />
      )}

      <WinnerModal resetGame={resetGame} winner={winner} />

      { /* firma */}
      <div className="fixed-bottom p-4" id="firma">
        Made with ❤️ by
        <a href="https://github.com/sm-nat" target="_blank" className="enlace-natalia">
          Natalia Silva Medina
        </a>
      </div>
    </main>

  )
}

export default App;
