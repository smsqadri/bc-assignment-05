import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer.js'

const Child2 = (props)=> {
    let [state,dispatch] = useReducer(CounterReducer, 10)
    
    return (
        <div>
            <h2> This is 2nd Child using CounterReducer </h2>
            <h3> Value of Reducer state is {state} </h3>
            <button onClick = {()=> dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )

}

export default Child2;