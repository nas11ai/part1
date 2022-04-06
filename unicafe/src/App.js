import { useState } from 'react'

const Button = ({ setButton, name }) => (
  <button onClick={setButton}>
    {name}
  </button>
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
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {all}</p>
      <p>average: {average ? average : 0}</p>
      <p>positive: {positive ? positive : 0}%</p>

    </div>
  )
}

export default App;
