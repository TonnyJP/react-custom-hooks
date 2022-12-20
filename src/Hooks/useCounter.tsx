import React from "react";


export const useCounter = (initialCount: number = 0, value: number = 1) => {
    const [count, setCount] = React.useState<number>(initialCount);
    const increment = () => {
        setCount(count + value);
    }
    const decrement = () => {
        setCount(count - value);
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count, increment, decrement, reset]
}