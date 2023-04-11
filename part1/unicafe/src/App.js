import { useState } from 'react'

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const StatisticLine = ({text, value}) => {
  //console.log(text, value)
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({feedback}) => {
  console.log("Statistics:", feedback)

  const total = feedback.good + feedback.neutral + feedback.bad
  // (good: 1, neutral: 0, bad: -1)
  const averageScore = ((feedback.good * 1) + (feedback.neutral * 0) + (feedback.bad * -1)) / total
  const positivePercentage = (feedback.good / total) * 100

  // If there's no feedback, display a message instead of stats
  if (feedback.good === 0 && feedback.neutral === 0 && feedback.bad === 0) {
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

      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text={'Good Feedback'} value={feedback.good}/>
          <StatisticLine text={'Neutral Feedback'} value={feedback.neutral}/>
          <StatisticLine text={'Bad Feedback'} value={feedback.bad}/>
          <StatisticLine text={'All Feedback'} value={total}/>
          <StatisticLine text={'Average Score'} value={averageScore}/>
          <StatisticLine text={'Positive Percentage'} value={`${positivePercentage}%`}/>
        </tbody>
      </table>
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
