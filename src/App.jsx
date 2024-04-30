import { useState } from 'react'
import './App.css'

function App() {

    let [result, setResult] = useState()
    let [count, setCount] = useState(0)



    const focusRock = () => {
        
    const options = ["rock", "paper", "scissors"]
    let rand = options[Math.floor(Math.random()*3)]
        console.log(rand)
        document.title = `${rand}`
    
        let btn1 = document.getElementById("btn1").textContent.toLowerCase()
        if(btn1  === rand){
            setResult("Draw !")
        }else if(btn1 == "rock" && rand === "scissors"){
            setResult("You Win")
            setCount(c => c + 1)
        }else {
            setResult("Computer Win")
        }
    }

   const focusPaper = () => {
        
    const options = ["rock", "paper", "scissors"]
    let rand = options[Math.floor(Math.random()*3)]
        console.log(rand)
        document.title = `${rand}`
    
        let btn2 = document.getElementById("btn2").textContent.toLowerCase()
        if(btn2  === rand){
            setResult("Draw !")
        }else if(btn2 == "paper" && rand === "rock"){
            setResult("You Win")

            setCount(c => c + 1)
        }else {
            setResult("Computer Win")
        }
    }

    const focusSci = () => {
        
    const options = ["rock", "paper", "scissors"]
    let rand = options[Math.floor(Math.random()*3)]
        console.log(rand)
        document.title = `${rand}`
    
        let btn3 = document.getElementById("btn3").textContent.toLowerCase()
        if(btn3  === rand){
            setResult("Draw !")
        }else if(btn3 == "scissors" && rand === "paper"){
            setResult("You Win")

            setCount(c => c + 1)
        }else {
            setResult("Computer Win")
        }
    }

    const fresh = () => {
        setCount(0)
    }
  return (
    <>
      <h2 className="heading">Build on React.js</h2> 
      <div>

      <button id="btn1" onClick={focusRock}>ROCK</button>
      <button id="btn2" onClick={focusPaper}>PAPER</button>
      <button id="btn3" onClick={focusSci}>SCISSORS</button>

      <h2 id="result">{result}</h2>
       </div>
       <b id="wins">Total Wins : {count}</b><br/> 
      <button onClick={fresh} id="restart">Restart</button>
   </>
  )
}

export default App
