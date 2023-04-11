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

const Statistics = ({feedback}) => {
  console.log("Statistics:", feedback)

  const total = feedback.good + feedback.neutral + feedback.bad
  // (good: 1, neutral: 0, bad: -1)
  const averageScore = ((feedback.good * 1) + (feedback.neutral * 0) + (feedback.bad * -1)) / total
  const positivePercentage = (feedback.good / total) * 100

  // If there's no feedback, display a message instead of stats
  if (feedback.good == 0 && feedback.neutral == 0 && feedback.bad == 0) {
    return (
      <div>
        <Header header={'Statistics'}/>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Header header={'Statistics'}/>
      <Stat stat={'Good Feedback'} count={feedback.good}/>
      <Stat stat={'Neutral Feedback'} count={feedback.neutral}/>
      <Stat stat={'Bad Feedback'} count={feedback.bad}/>
      <Stat stat={'All Feedback'} count={total}/>
      <Stat stat={'Average Score'} count={averageScore}/>
      <Stat stat={'Positive Percentage'} count={`${positivePercentage}%`}/>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.label}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

  return (
    <div>
      <Header header={'Give Feedback'}/>

      <Button handleClick={() => setGood(good + 1)} label='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} label='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} label='Bad'/>

      <Statistics feedback={feedback}/>
    </div>
  )
}

export default App
