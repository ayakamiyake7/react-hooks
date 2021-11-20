import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentB() {
    const CountContext = useContext(CountContext)
    return (
        <div>
            <button onClick={() => CountContext.countDispatch({type: 'increment1', value: 1})}>increment1</button>
            <button onClick={() => CountContext.countDispatch({type: 'decrement1', value: 1})}>decrement1</button>
            <button onClick={() => CountContext.countDispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ComponentB
