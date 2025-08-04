import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [finished, setFinished] = useState(false)

  const toggleFinished = () => {
    setFinished(!finished)
    savetoLS()
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    savetoLS()
  }

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleEdit = (e) => {
    let id = e.currentTarget.name
    let todo = todos.filter(item => { return item.id === id })
    setTodo(todo[0].todo)
    let newTodo = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodo)
    savetoLS()
  }

  const handleDelete = (e) => {
    let id = e.currentTarget.name
    let confirmation = confirm("Are you sure you want to delete this todo")
    if (confirmation === true) {
      let newTodo = todos.filter(item => { return item.id !== id })
      setTodos(newTodo)
      savetoLS()
    }
  }

  const handleChange = (e) => {
    setTodo(e.currentTarget.value)
  }

  const handleCheckbox = (e) => {
    let id = e.currentTarget.name
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    savetoLS()
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="md:container mx-3 text-center min-h-[80vh] md:w-[50vw] bg-emerald-100 md:mx-auto mt-[20px] rounded-[15px] border-2 ">
          <h1 className='justify-center text-center bg-emerald-600 p-[15px] text-[25px] rounded-tl-[10px] rounded-tr-[10px] text-white font-bold'>DailyDo - Manage Your Todos In One Place</h1>

          <div className="addTodo mt-[15px] flex justify-between border-gray-400 rounded-2xl border-2 md:w-[40vw] h-[50px] mx-[auto] ">
            <input onChange={handleChange} value={todo} className='w-full pl-[15px] placeholder:text-[20px] text-gray-500  placeholder:text-left focus:outline-none flex items-center h-12' type="text" name="addTodo" placeholder='Add a new task' />
            <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-orange-400 hover:bg-orange-600 rounded-[12px] font-bold text-[18px] w-[100px] text-white disabled:bg-red-500 cursor-pointer'>Add</button>
          </div>
          <div className='finished-todo flex align-middle justify-items-start mt-5 gap-1.5 ml-5'>
            <input onChange={toggleFinished} type="checkbox" className='cursor-pointer' checked={finished} />Show finished
          </div>
          <div className="line h-[1px] w-[95%] m-[15px] bg-black mt-4 opacity-50"></div>
          <h1 className='text-start mt-2 ml-5 text-2xl font-bold'>Your Todos</h1>
          {todos.length === 0 && <div className='mt-[10px] text-[18px] text-start ml-10'>No Todos to display</div>}
          {todos.map(item => {
            return (finished || !item.isCompleted) && <div key={item.id} className="todo flex items-center justify-between md:w-[40vw] gap-10 md:mx-auto min-h-[60px] border-2 border-gray-500 rounded-2xl mt-[20px] m-[10px]">
              <div className='flex gap-4'>
                <input type="checkbox" className='cursor-pointer ml-[10px]' name={item.id} onChange={handleCheckbox} checked={item.isCompleted} id='' />
                <div className={`max-w-[26vw] break-words ${item.isCompleted ? "line-through" : ""}`}>{item.todo}</div>
              </div>
              <div className="buttons flex text-white gap-2">
                <button className='bg-orange-400 cursor-pointer hover:bg-orange-600 font-medium min-h-[56px] min-w-[60.2px] rounded-[14px]' name={item.id} onClick={handleEdit}><p><FaEdit className='h-7 size-6 mx-auto'/></p></button>
                <button className='bg-orange-400 hover:bg-orange-600 cursor-pointer font-medium min-h-[56px] min-w-[60.2px] rounded-[14px]' name={item.id} onClick={handleDelete}><MdDelete className='mx-auto h-8 size-10'/></button>
              </div>
            </div>
          })}
        </div>
      </main>
    </>
  )
}

export default App
