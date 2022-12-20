import React from "react";


export const useDocumentTitle: React.FC<React.PropsWithChildren<number>> = (count) => {
    React.useEffect(() =>{
        document.title= `Count: ${count}`
    },[count]);

    return(<>
    </>)
}