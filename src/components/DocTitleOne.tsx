import React from "react"
import { useDocumentTitle } from "../Hooks/useDocumentTitle";

export const DocTitleOne: React.FC = () => {
    const [count, setCount ] = React.useState<number>(0);
   useDocumentTitle(count);
    return(<>
    <div> {count}</div>
    <button onClick={() => setCount(count + 1)}> Increase count</button>
    </>)
}