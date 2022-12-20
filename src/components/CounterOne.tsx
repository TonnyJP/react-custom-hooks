import React, { MouseEventHandler } from "react";
import { useCounter } from "../Hooks/useCounter";

export const CounterOne: React.FC = () => {
   const [count , increment, decrement, reset] = useCounter();
   
    return(<>
    <h2>{count as number}</h2>
    <button onClick={increment as MouseEventHandler<HTMLButtonElement>}>Increase Count</button>
    <button onClick={decrement as MouseEventHandler<HTMLButtonElement>}>Decrease Count</button>
    <button onClick={reset as MouseEventHandler<HTMLButtonElement>}>Reset Count</button>
    </>)
}