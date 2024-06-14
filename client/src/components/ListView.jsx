import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";
import ListInputCopmponent from "./ListInputView";
import validateState from "../utils/validateState";

// the same HandleChange we sent from the parent will be used to handle change on this component.
// It will also be passed to this component's children
const ListView = ({ listName, HandleChange }) => {

    // declare state variables and use validateState script to assign their state
    const [name, setName] = useState(validateState(listName, "New"))

    //const [list, setList] = useState(list from storage)
   // callback hook to pass to child list items goes here

   //handle input on name
   const handleChange =(ev) => { HandleChange(ev, setName)}
    return (

        <div className="flex flex-row flex-wrap w-70 justify-center [&_*]:text-center p-1 ">

            <StepBtn onClick={() => { }} symbol={'-'} />
            <div className="w-60 py-4 [&_*]:w-52 bg-gray-800 rounded-md flex flex-row flex-wrap justify-center">
                <input className="h-10 w-full border-b-2 border-purple-900" type="text" onChange={handleChange} placeholder={`${name} Card`} />
                <ul>
                    <ListInputCopmponent HandleChange={HandleChange}  placeholder={`${name} Name`} />
                    <ListInputCopmponent HandleChange={HandleChange}  placeholder={`${name} Name`} />
                    <ListInputCopmponent HandleChange={HandleChange}  placeholder={`${name} Name`}  />

                </ul>
            </div>

            <StepBtn onClick={() => { }} symbol={'+'} />
        </div>

    )
}

export default ListView;