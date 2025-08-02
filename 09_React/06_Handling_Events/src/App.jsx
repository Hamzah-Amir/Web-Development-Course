import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Hamza")
  const [form, setForm] = useState({name:"",phone:""})

  const handleClick = ()=>{
    alert("Hey I am clicked")
  }

  const handleMouseOver = ()=>{
    alert("Mouse was hovered on me")
  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div className="red" onMouseOver={handleMouseOver}>I am a red div</div>
      <input type="text" name='name' value={form.name} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
