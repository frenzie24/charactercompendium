import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";
import ListInputCopmponent from "./ListInputComponent";
import validateState from "../utils/validateState";

// the same handleChange we sent from the parent will be used to handle change on this component.
// It will also be passed to this component's children
const ListView = ({ listName, handleChange }) => {

    // declare state variables and use validateState script to assign their state
    const [name, setName] = useState(validateState(listName, "New"))

    //const [list, setList] = useState(list from storage)
   // callback hook to pass to child list items goes here

   //handle input on name
   const _handleChange =(ev) => { handleChange(ev, setName)}
    return (

        <div className="flex flex-row flex-wrap w-70 justify-center [&_*]:text-center p-1 ">

            <StepBtn onClick={() => { }} symbol={'-'} />
            <div className="w-60 py-4 [&_*]:w-52 bg-gray-800 rounded-md flex flex-row flex-wrap justify-center">
                <input className="h-10 w-full border-b-2 border-purple-900" type="text" onChange={_handleChange} placeholder={`${name} Card`} />
                <ul>
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${name} Name`} />
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${name} Name`} />
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${name} Name`}  />

                </ul>
            </div>

            <StepBtn onClick={() => { }} symbol={'+'} />
        </div>

    )
}

export default ListView;