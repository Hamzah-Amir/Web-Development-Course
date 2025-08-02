import {React, useEffect} from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
        alert("I will run on every Render HAHAHA")
    })

    useEffect(() => {
        alert("I am running because color was changed")
    }, [color])
    
    
  return (
    <div>I am a {color} color Navbar</div>
  )
}

export default Navbar