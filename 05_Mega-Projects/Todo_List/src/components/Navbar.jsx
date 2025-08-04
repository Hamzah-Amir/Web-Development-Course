import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex p-5 justify-between text-white mx-auto bg-slate-500">
        <div className="logo text-[20px]"><span className='font-bold'>DailyDo</span></div>
        <ul className="flex gap-14 text-[20px]">
            <li className='cursor-pointer hover:font-bold'>Home</li>
            <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar