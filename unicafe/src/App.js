import { useState } from 'react'

const Button = ({ setButton, name }) => (
  <button onClick={setButton}>
    {name}
  </button>
)

const Statistics = ({ good, neutral, bad, all, average, positive }) => (
  <div>
    <StatisticsDisplay name='good' num={good} />
    <StatisticsDisplay name='neutral' num={neutral} />
    <StatisticsDisplay name='bad' num={bad} />
    <StatisticsDisplay name='all' num={all} />
    <StatisticsDisplay name='average' num={average ? average : 0} />
    <StatisticsDisplay name='positive' num={(positive ? positive : 0) + ' %'} />
  </div>
)

const StatisticsDisplay = ({ name, num }) => <p>{name} {num}</p>

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
