import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 =() =>{
    alert('button 2 clicked');
  }

  const addToFive =(num) =>{
    alert(num+5)
  }
  return ( 
    <>
      <h1>React core concept part2</h1>

    <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}> Click me </button>
      <button onClick={handleClick2}>Two button</button>
      <button onClick={() => {alert('third clicked')}}>third button</button>
      <button onClick={() => addToFive(5)}>add num button</button>
    </>
  )
}

export default App
