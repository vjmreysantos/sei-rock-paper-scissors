import React from 'react'

function App() {

  const [playerChoice, setPlayerChoice] = React.useState(null)
  const [compChoice, setCompChoice] = React.useState(null)
  const choices = [ 'Rock', 'Paper', 'Scissors', 'Lizard', 'Spock' ]
  const [disable, setDisable] = React.useState(false)

  const handleChoice = (e) => {
    setPlayerChoice(e.target.value)
    setCompChoice(Math.floor(Math.random() * 5))
    setDisable(!disable)
  }

  const isWin = (
    ((playerChoice === 'Rock') && (choices[compChoice] === 'Scissors')) ||
    ((playerChoice === 'Rock') && (choices[compChoice] === 'Lizard')) ||
    ((playerChoice === 'Paper') && (choices[compChoice] === 'Rock')) ||
    ((playerChoice === 'Paper') && (choices[compChoice] === 'Spock')) ||
    ((playerChoice === 'Scissors') && (choices[compChoice] === 'Paper')) ||
    ((playerChoice === 'Scissors') && (choices[compChoice] === 'Lizard')) ||
    ((playerChoice === 'Lizard') && (choices[compChoice] === 'Spock')) ||
    ((playerChoice === 'Lizard') && (choices[compChoice] === 'Paper')) ||
    ((playerChoice === 'Spock') && (choices[compChoice] === 'Scissors')) ||
    ((playerChoice === 'Spock') && (choices[compChoice] === 'Rock'))
  )

  const isLose = (
    ((playerChoice === 'Rock') && (choices[compChoice] === 'Paper')) ||
    ((playerChoice === 'Rock') && (choices[compChoice] === 'Spock')) ||
    ((playerChoice === 'Paper') && (choices[compChoice] === 'Scissors')) ||
    ((playerChoice === 'Paper') && (choices[compChoice] === 'Lizard')) ||
    ((playerChoice === 'Scissors') && (choices[compChoice] === 'Rock')) ||
    ((playerChoice === 'Scissors') && (choices[compChoice] === 'Spock')) ||
    ((playerChoice === 'Lizard') && (choices[compChoice] === 'Rock')) ||
    ((playerChoice === 'Lizard') && (choices[compChoice] === 'Scissors')) ||
    ((playerChoice === 'Spock') && (choices[compChoice] === 'Paper')) ||
    ((playerChoice === 'Spock') && (choices[compChoice] === 'Lizard'))
  )

  const isDraw = (
    (playerChoice === choices[compChoice])
  )



  const handleReset = () => {
    setPlayerChoice(null)
    setCompChoice(null)
    setDisable(false)
  }
  
  return (
    <div className="container">
      <h1>Choose one:</h1>
      <div>
        <button id="choices" value="Rock" disabled={disable} onClick={handleChoice}>👊🏻</button>
        <button id="choices" value="Paper" disabled={disable} onClick={handleChoice}>✋🏻</button>
        <button id="choices" value="Scissors" disabled={disable} onClick={handleChoice}>✌🏻</button>
        <button id="choices" value="Lizard" disabled={disable} onClick={handleChoice}>🤏🏻</button>
        <button id="choices" value="Spock" disabled={disable} onClick={handleChoice}>🖖🏻</button>
      </div>

      {isWin && 
        <>
          <p>You Win!</p>
          <p>You Chose: {playerChoice}</p>
          <p>Computer Chose: {choices[compChoice]}</p>
          <button className="reset" onClick={handleReset} >Reset Game</button>
        </>
      }
      {isLose && 
        <>
          <p>You Lost!</p>
          <p>You Chose: {playerChoice}</p>
          <p>Computer Chose: {choices[compChoice]}</p>
          <button className="reset" onClick={handleReset}>Reset Game</button>
        </>
      }
      {isDraw &&
        <>
          <p>Its a Draw!</p>
          <p>You Chose: {playerChoice}</p>
          <p>Computer Chose: {choices[compChoice]}</p>
          <button className="reset" onClick={handleReset}>Reset Game</button>
        </>
      }
    </div>
  )
}

export default App


// import React from 'react'
// function getWinner(playerChoice, compChoice) {
//   if (playerChoice === compChoice) return 'Tie'
//   if  (
//     (playerChoice === 'rock' && compChoice === 'scissors') ||
//     (playerChoice === 'paper' && compChoice === 'rock' ) ||
//     (playerChoice === 'scissors' && compChoice === 'paper')
//   ) return 'Player Wins'
//   return 'Computer Wins'
// }
// const choices = ['rock', 'paper', 'scissors']
// function App() {
//   const [playerChoice, setPlayerChoice] = React.useState('')
//   const [compChoice, setCompChoice] = React.useState('')
//   const handleChoice = (e) => {
//     const tempPlayerChoice = e.target.value
//     const tempCompChoice = choices[Math.floor(Math.random() * choices.length)]
//     setPlayerChoice(tempPlayerChoice)
//     setCompChoice(tempCompChoice)
//   }
//   const handleReset = () => {
//     setPlayerChoice('')
//     setCompChoice('')
//   }
//   return (
//     <div>
//       <p>Player Choice: {playerChoice}</p>
//       <p>Computer Choice: {compChoice}</p>
//       <p>Result: {playerChoice && getWinner(playerChoice, compChoice) + '!'}</p>
//       <div>
//         {choices.map(choice => (
//           <button key={choice} value={choice} onClick={handleChoice}>{choice}</button>
//         ))}
//         {/* <button value="rock" onClick={handleChoice}>Rock</button>
//         <button value="paper" onClick={handleChoice}>Paper</button>
//         <button value="scissors" onClick={handleChoice}>Scissors</button> */}
//         <button onClick={handleReset}>Reset Game</button>
//       </div>
//     </div>
//   )
// }
// export default App
