import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async ()=>{
      let a = await fetch("https://jsonplaceholder.typicode.com/posts")
      let response = await a.json()
      setData(response)
    }
    fetchData()
  })
  
  return (
    <>
    <div className="flex container w-[100%] gap-2 flex-wrap">
      {data.map(item =>{
        return <div key={item.userID}  className="cards h-[30vh] w-[25vw] border-2">
          <div className="id">ID:{item.id}</div>
          <div className="title">Title: {item.title}</div>
          <div className="body">Body: {item.body}</div>
        </div>
      })}
    </div>
    </>
  )}
  
export default App