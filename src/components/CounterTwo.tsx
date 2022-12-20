import React, { MouseEventHandler } from "react";
import { useCounter } from "../Hooks/useCounter";

export const CounterTwo: React.FC = () => {
    /* const [count, setCount] = React.useState<number>(0);
    const increase = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0)
    } */
    const [count , increment, decrement, reset] = useCounter(10,2);
   
    return(<>
    <h2>{count as number}</h2>
    <button onClick={increment as MouseEventHandler<HTMLButtonElement>}>Increase Count</button>
    <button onClick={decrement as MouseEventHandler<HTMLButtonElement>}>Decrease Count</button>
    <button onClick={reset as MouseEventHandler<HTMLButtonElement>}>Reset Count</button>
    </>)
}