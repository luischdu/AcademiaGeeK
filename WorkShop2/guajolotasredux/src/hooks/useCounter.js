import { useState } from "react"


export const useCounter = (initialState = 1) => {

    const [count, setCount] = useState(initialState)

    const decrement = () => {
        setCount( prevCount => prevCount - 1 )
    }

    const increment = () => {
        setCount( prevCount => prevCount + 1 )
    }
    
    return [count, decrement, increment]
}

