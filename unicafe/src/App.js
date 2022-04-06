import { useState } from 'react'

const Button = ({ setButton, name }) => (
  <button onClick={setButton}>
    {name}
  </button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>no feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine name='good' num={good} />
        <StatisticsLine name='neutral' num={neutral} />
        <StatisticsLine name='bad' num={bad} />
        <StatisticsLine name='all' num={all} />
        <StatisticsLine name='average' num={average ? average : 0} />
        <StatisticsLine name='positive' num={(positive ? positive : 0) + ' %'} /></tbody>
    </table>
  )
}

const StatisticsLine = ({ name, num }) => (
  <tr>
    <td>{name}</td>
    <td>{num}</td>
  </tr>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setButton={handleGood} name='good' />
      <Button setButton={handleNeutral} name='neutral' />
      <Button setButton={handleBad} name='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

    </div>
  )
}

export default App;
