import React, { useContext } from 'react'
import CounterContext from './CounterContext.js'

const Child = (props)=> {
    let counterValue = useContext(CounterContext)
    
    return (
        <div>
            <h2> This is 1st Child using CounterContext </h2>
            <h3> Counter value is {counterValue} </h3>
            <button onClick = {()=> {counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )

}

export default Child;