import React from "react"
import { useDocumentTitle } from "../Hooks/useDocumentTitle";

export const DocTitleTwo: React.FC = () => {
    const [count, setCount ] = React.useState<number>(0);
    /* React.useEffect(() =>{
        document.title= `Count: ${count}`
    },[count]); */
    
    useDocumentTitle(count);
    return(<>
    <div> {count}</div>
    <button onClick={() => setCount(count + 1)}> Increase count</button>
    </>)
}