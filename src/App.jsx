import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 // 6,203,132
const style={flexDirection: "column", display: "flex",marginBottom:"10%",backgroundColor: "rgb(6,203,132)",border: "8px",borderStyle: "dotted",borderColor: "cyan",textColor: "rgb(135,242,250)"}
  return (
    
      <div style={style}>
      
      <h1 style={{textAlign:"center",top: "25%"}}>Samuli Nukala</h1>
    
      <p style={{fontSize: "1.5em",marginLeft: "15%",maxWidth: "70%"}}> Recently graduated programmer that is learning React to get into frontenddevelopment. Has experience in programming games for museums. Likes to jump head first into problems.</p>
      <h1> Skills </h1>
      <div style={{marginTop: "3%",marginLeft: "10%",display: "flex",flexWrap: "wrap",marginBottom:"5%"}}>
      <Skills text="problem solving"  emoji="🔍"></Skills>
      <Skills text="tenacity"  emoji="🦾"></Skills>
      <Skills text="Intuitive instincts"  emoji="🎱"></Skills>
      <Skills text="C#/Unity"  emoji="🕹️"></Skills>
      <Skills text="Javascript" emoji="🧾"></Skills>
      <Skills text="bug bashing" emoji="🫟"></Skills>
      
      </div>
       </div>
    
  )
}
// 203, 132, 54
function Skills(props){
const style={fontSize: "1.4em"}
  return(
    
    <div style={{paddingLeft: "3%",backgroundColor: "rgb(221,45,74)",margin: "1%",borderRadius:"6%"}}>
    <p style={style}>{props.text+" "+props.emoji}</p>
   
   
    </div>
  
  );
}

export default App
