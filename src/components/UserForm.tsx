import React, { FormEventHandler } from "react";
import { useInput } from "../Hooks/useInput";

export const UserForm: React.FC = () => {

    /* const [firstName, setFirstName] = React.useState<string>("");
    const [ lastName, setLastName ] = React.useState<string>(""); */
    const {value: firstName, bind: bindFirstName, reset: resetFirstName} = useInput();
    const {value: lastName, bind: bindLastName, reset: resetLastName} = useInput();
    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName()
    }
    return(<div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name</label>
                <input type="text" {...bindFirstName} />
            </div>
            <div>
                <label>Last name</label>
                <input type="text" {...bindLastName} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
}