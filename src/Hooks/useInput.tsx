import React from "react"
const initialValue: string = "";
export const useInput = (initVal: string = initialValue) => {
    const [value, setValue ] = React.useState(initVal);
    const reset = () => {
        setValue(initialValue);
    }
    const bind = {
        value,
        onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => {setValue(e.target.value)}
    }

    return {value, bind, reset}
}