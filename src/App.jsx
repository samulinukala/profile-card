import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // 6,203,132
const style={flexDirection: "column", display: "flex",paddingTop: "10%",paddingBottom: "20%",backgroundColor: "rgb(6,203,132)"}
  return (
    
      <div style={style}>
      
      <h1 style={{textAlign:"center",top: "25%"}}>Samuli Nukala</h1>
    
      <p style={{fontSize: "1.5em",marginLeft: "15%",maxWidth: "70%"}}> Recently graduated programmer that is learning react to get into frontend development. Has experience in programming games for museums. Likes to jump head first into problems</p>
      
      <div style={{marginTop: "3%",marginLeft: "10%",display: "flex"}}>
      <Skills text="problemSolving " emojis={<span>&#x1f635;</span>} emoji="🌚"></Skills>
      <Skills text="problemSolving " emojis={<span>&#x1f635;</span>} emoji="🌚"></Skills>
      <Skills text="problemSolving " emojis={<span>&#x1f635;</span>} emoji="🌚"></Skills>
      <Skills text="problemSolving " emojis={<span>&#x1f635;</span>} emoji="🌚"></Skills>
      </div>
       </div>
    
  )
}
// 203, 132, 54
function Skills(props){
const style={ fontSize: "1.2em",margin: "1%",padding: "6%",backgroundColor: "rgb(200,200,110)"}
  return(
    
    <div style={{outerWidth: "120%"}}>
    <p1 style={style}>{props.text+props.emoji}</p1>
   
    </div>
  
  );
}

export default App
