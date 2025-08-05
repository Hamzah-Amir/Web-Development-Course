import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex'>
            <ul className='gap-5 flex justify-between p-2.5 mx-auto'>
                <li className='list-none '>Home</li>
                <li className='list-none '>Contact</li>
                <li className='list-none '>About</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar