import React from 'react'
import { useContext } from 'react'
import { counterContext, setCounterContext } from '../context/context'

const Count = () => {
    const value = useContext(counterContext)

  return (
    <div>{value.count}</div>
  )
}

export default Count