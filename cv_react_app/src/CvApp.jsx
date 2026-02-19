import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Button.jsx'
import './Components/Buu.jsx'

function CvApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CV APP</h1>
      <div id="basic_textfields">
          <label>Name: </label>
          <input></input>
          <label>Email: </label>
          <input></input>
          <label>Phone: </label>
          <input></input>
      </div>
      <br></br><br></br>
      <div id="school_textfields">
          <label>School: </label>
          <input></input>
          <label>Major: </label>
          <input></input>
          <label>Completion Date: </label>
          <input></input>
      </div>
      
      <Buu></Buu>

      <Button id="submit" text="Submit" color="blue" fontSize={12} textcolor="white"/>
      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default CvApp
