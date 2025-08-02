import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "General Todo",
      desc: "I am ageneral Todo"
    },
    {
      title: "Home Work Todo",
      desc: "I am a Todo for homework"
    },
    {
      title: "Grocery Todo",
      desc: "I am a Grocery Todo"
    }
  ])

  // const Todo = ({todo}) =>{
  //   return (<>
  //   <div className="todos border-2 border-red-400 m-2.5">
  //   <div className="todo">{todo.title}</div>
  //   <div className="todo">{todo.desc}</div>
  //   </div>
  //   </>)}

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
      <h1>Vite + React</h1>
      {showbtn ? <button>Show button is True</button> : <button>Show button is False</button>}
      {/* {showbtn && <button>I will be shown when another button will be clicked</button>} */}
      <div className="card">
        <button onClick={() => setCount(() => setshowbtn(!showbtn))}>
          Toggle Show Button
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {todos.map(item => {
        // return <Todo key={item.title} todo={item}/>
        // Second Way to render list
        return <div key={item.title} className="todos border-2 bg-blue-400 border-red-400 m-2.5">
          <div className="todo">{item.title}</div>
          <div className="todo">{item.desc}</div>
        </div>
      })}
    </>
  )
}

export default App
