import { useState } from 'react'

export const useCounter = (inicial = 1) => {
    const [state, setState] = useState(inicial)
    const incremento = () => {
        setState(state + 1)
    }
    const decremento = () => {
        setState(state - 1)
    }
    const reset =() =>{
        setState(inicial)
    }
    return{
        state,
        incremento,
        decremento,
        reset
    }
}
