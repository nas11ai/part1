const Header = props => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = props => {
  console.log([props.part1, props.part2, props.part3])
  return (
    <>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </>
  )
}

const Part = props => {
  console.log([props.name, props.exercises])
  return (
  <>
    <p>{props.name} {props.exercises}</p>
  </>
  )
}

const Total = props => {
  console.log([props.part1, props.part2, props.part3])
  return (
    <>
      Total exercises : {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </div>
  )
}

export default App