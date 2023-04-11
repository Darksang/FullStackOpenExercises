import { useState } from 'react'

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const Stat = ({stat, count}) => {
  //console.log(stat, count)
  return (
    <p>{stat}: {count}</p>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.label}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const positivePercentage = (good / total) * 100

  // (good: 1, neutral: 0, bad: -1)
  const averageScore = ((good * 1) + (neutral * 0) + (bad * -1)) / total

  return (
    <div>
      <Header header={'Give Feedback'}/>

      <Button handleClick={() => setGood(good + 1)} label='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} label='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} label='Bad'/>
      
      <Header header={'Statistics'}/>

      <Stat stat={'Good Feedback'} count={good}/>
      <Stat stat={'Neutral Feedback'} count={neutral}/>
      <Stat stat={'Bad Feedback'} count={bad}/>
      <Stat stat={'All Feedback'} count={total}/>
      <Stat stat={'Average Score'} count={averageScore}/>
      <Stat stat={'Positive Percentage'} count={`${positivePercentage}%`}/>
    </div>
  )
}

export default App
