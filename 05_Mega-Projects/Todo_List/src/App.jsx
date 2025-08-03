import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {

  const [addtodo, setaddTodo] = useState()

  return (
    <>
    <Navbar/>
    <main>
      <div className="container text-center h-[80vh] w-[40vw] bg-emerald-100 mx-auto mt-[20px] rounded-[15px] border-2 ">
        <h1 className='justify-center text-center bg-emerald-600 p-[15px] text-[25px] rounded-tl-[10px] rounded-tr-[10px] text-white font-bold'>DailyDo App</h1>
        <div className="addTodo mt-[15px] flex justify-between border-gray-400 rounded-2xl border-2 w-[30vw] h-[50px] mx-[auto] ">
          <input className='placeholder:text-[20px] pl-[10px] placeholder:pr-[50px] text-gray-500  placeholder:text-center focus:outline-none flex items-center h-12' type="text" name="addTodo" placeholder='Add a new task'/>
          <button className='bg-orange-400 rounded-[12px] font-bold text-[18px] w-[80px] text-white'>Add</button>
          </div>
          
          <div className="todo flex">
            <div className="button"><button></button>done</div>
            <div className="text">ssss</div>
            <div className="button"><button></button>delete</div>
          </div>
      </div>
    </main>
    </>
  )
}

export default App
