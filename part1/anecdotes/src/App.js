import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.label}</button>
)

const MostVotedAnecdote = (props) => {
  //console.log(props.mostVoted)
  //console.log(props.anecdotes)
  //console.log(props.anecdotesPoints)
  if (props.mostVoted === -1) {
    return (
      <div>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote Most Voted</h1>
      <p>{props.anecdotes[props.mostVoted]}</p>
      <p>has {props.anecdotesPoints[props.mostVoted]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [anecdotesPoints, setAnecdotesPoints] = useState(Array(anecdotes.length).fill(0))

  // Select the first anecdote to display randomly
  const randomNumber = Math.floor(Math.random() * anecdotes.length)
  const [selected, setSelected] = useState(randomNumber)

  const [mostVoted, setMostVoted] = useState(-1)

  const selectRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    console.log('Generated Number:', randomNumber)
    setSelected(randomNumber)
  }

  const voteCurrentAnecdote = () => {
    const newPoints = [ ...anecdotesPoints ]
    newPoints[selected] += 1
    setAnecdotesPoints(newPoints)
    updateMostVoted(newPoints)
  }

  const updateMostVoted = (points) => {
    const highestPoints = Math.max(...points)
    console.log('Highest Points:', highestPoints)
    const highestIndex = points.indexOf(highestPoints)
    console.log('Highest Index:', highestIndex)
    setMostVoted(highestIndex)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {anecdotesPoints[selected]} votes</p>
      <Button handleClick={voteCurrentAnecdote} label='Vote' />
      <Button handleClick={selectRandomAnecdote} label='Next Anecdote' />

      <MostVotedAnecdote mostVoted={mostVoted} anecdotes={anecdotes} anecdotesPoints={anecdotesPoints} />
    </div>
  )
}

export default App
