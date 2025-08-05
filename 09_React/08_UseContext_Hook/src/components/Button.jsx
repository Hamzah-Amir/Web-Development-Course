import React from 'react'
import Count from './Count'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Button = () => {
    const value = useContext(counterContext)
  return (
   <> <button onClick={() => value.setCount((count) => count + 1)}><span><Count/></span> I am a Button</button></>
  )
}

export default Button