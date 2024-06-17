import React, { useState, useEffect } from "react";
import StepBtn from "../StepBtn";
import ListInputView from "./InputView";
import validateState from "../../utils/validateState";
import '../../App.css'
import { v4 as uuidv4 } from 'uuid';
// the same HandleChange we sent from the parent will be used to handle change on this component.
// It will also be passed to this component's children

const ListView = ({ listName, HandleChange, useGetVal, Items }) => {



    // declare state variables and use validateState script to assign their state
    const [name, setName] = useState(validateState(listName, "New"))

    const [key, setKey] = useState(uuidv4());
    // const [list, setItems] = useState(validateState(Items, dummyList))
    debugger;
    const [list, setList] = useState(validateState(Items, ['1', '3', '1', '3', '1', '3', '1', '3', '1']))
    // callback hook to pass to child list items goes here


    let listItems = list.map(entry => (<li key={uuidv4()} className=" "><ListInputView HandleChange={HandleChange} placeholder={`${entry} Name`} useGetVal={useGetVal} />  </li>))
    //handle input on name
    const handleChange = (ev) => { HandleChange(ev, setName) }
    return (

        <div className="framebg flex flex-row flex-wrap w-70 rounded-md justify-center [&_*]:text-center p-1 ">

            {/* <StepBtn onClick={() => { }} symbol={'-'} /> */}
            <div className=" w-72 py-4 [&_*]:w-64 flex flex-row flex-wrap justify-center items-start">
                <input className="inputbg h-10 w-full" type="text" onChange={handleChange} placeholder={`${name} Card`} />
                <ul className="flex h-full flex-col flex-wrap items-start">
                    {listItems}

                </ul>
            </div>

            {/* <StepBtn onClick={() => { }} symbol={'+'} />*/}
        </div>

    )
}

export default ListView;