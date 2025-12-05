import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    
      <div>
      
      <h1>Samuli Nukala</h1>
      <p> Recently graduated programmer that is learning react to get into frontend development. Has experience in programming games for museums. Likes to jump head first into problems</p>
      <Skills text="problemSolving " emojis={<span>&#x1f635;</span>} emoji="🌚"></Skills>
       </div>
    
  )
}

function Skills(props){

  return(
    <div className="Skills">
    <p1>{props.text}</p1>
    <p1>{props.emoji}</p1>
    <p1>{props.emojis}</p1>
    </div>
  
  )
}

export default App
