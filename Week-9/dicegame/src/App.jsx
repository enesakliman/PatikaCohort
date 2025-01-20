import { useState } from 'react'
import './App.css'
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function App() {
  const diceImg = [dice1, dice2, dice3, dice4, dice5, dice6]
  const [winnerPlayer, setWinnerPlayer] = useState('')
  const [playerName, setPlayerName] = useState('Player 1')
  const [playerPC, setPlayerPC] = useState('Player 2')
  const [playerDice, setPlayerDice] = useState(1)
  const [playerPcDice, setPlayerPcDice] = useState(1)
  const [rolling, setRolling] = useState(false)
  const [isEditingName1, setIsEditingName1] = useState(false)
  const [isEditingName2, setIsEditingName2] = useState(false)

  const rollDice = async () => {
    setRolling(true)
    let playerDiceValue = 0
    let playerPcDiceValue = 0

    for (let i = 0; i < 20; i++) {
      playerDiceValue = Math.floor(Math.random() * 6) + 1
      playerPcDiceValue = Math.floor(Math.random() * 6) + 1
      setPlayerDice(playerDiceValue)
      setPlayerPcDice(playerPcDiceValue)
      await sleep(100)
      if (i === 19) {
        setRolling(false)
      }
    }

    if (playerDiceValue > playerPcDiceValue) {
      setWinnerPlayer(`${playerName} Wins!`)
    } else if (playerDiceValue < playerPcDiceValue) {
      setWinnerPlayer(`${playerPC} Wins!`)
    } else {
      setWinnerPlayer('Draw!')
    }
  }

  const handleNameChange1 = (event) => {
    setPlayerName(event.target.value)
  }

  const handleNameChange2 = (event) => {
    setPlayerPC(event.target.value)
  }

  return (
    <div className='content'>
      <h1>Dice Game</h1>
      <p className='winPlayer'>{winnerPlayer}</p>
      
      <div className='players'>
        <div className='player1'>
          {isEditingName1 ? (
            <input
              type="text"
              value={playerName}
              onChange={handleNameChange1}
              onBlur={() => setIsEditingName1(false)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setIsEditingName1(false)
                }
              }}
              autoFocus
            />
          ) : (
            <h2 onClick={() => setIsEditingName1(true)}>{playerName}</h2>
          )}
          <img 
            src={diceImg[playerDice - 1]} 
            alt={`Dice ${playerDice}`} 
          />
        </div>
        
        <div className='player2'>
          {isEditingName2 ? (
            <input
              type="text"
              value={playerPC}
              onChange={handleNameChange2}
              onBlur={() => setIsEditingName2(false)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setIsEditingName2(false)
                }
              }}
              autoFocus
            />
          ) : (
            <h2 onClick={() => setIsEditingName2(true)}>{playerPC}</h2>
          )}
          <img 
            src={diceImg[playerPcDice - 1]} 
            alt={`Dice ${playerPcDice}`}
          />
        </div>
      </div>

      <button disabled={rolling} onClick={rollDice}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>
    </div>
  )
}

export default App