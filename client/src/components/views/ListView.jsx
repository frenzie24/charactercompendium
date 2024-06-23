import React, { useState, useEffect } from "react";
import StepBtn from "../StepBtn";
import Inputview from "./InputView";
import validateState from "../../utils/validateState";
import '../../App.css'
import { v4 as uuidv4 } from 'uuid';
// the same HandleChange we sent from the parent will be used to handle change on this component.
// It will also be passed to this component's children

const genDummyInputList = (listName, id) => {
    let dummy = [];
    for(let i = 0; i < 10; i++) {
      dummy.push({
        value: `${listName}: i`,
        id: id
      })
    }
    return dummy;
  }


const ListView = ({ listName, HandleChange, Items: {Name, List}={Name:'List', List:['NEW LIST']} } ) => {



    // declare state variables and use validateState script to assign their state
    const [name, setName] = useState(validateState(Name, List, "New"))
// new uuid is used to tie each item to each if Items prop is undefined
    const  uuid = uuidv4();
    const [id, setId] = useState(validateState(uuid, uuid))

    const [list, setList] = useState(validateState(List ? List : genDummyInputList(Name, uuid), uuid))//genDummyInputList(listName, uuid))
    // callback hook to pass to child list items goes here


    // populate our array of listitems to render
    const listItems = list.map(entry => {
        //the key needs a unique id that we assign with a new uuid,
        const key = uuidv4();
        return (<li key={key} id={uuid} name={name} className=" "><Inputview HandleChange={HandleChange} name={name} placeholder={`${entry} Name`} Value={entry} Key={key} />  </li>);
    }
    )
    //handle input on name
    const handleChange = (ev) => { HandleChange(ev, setName) }

    return (

        <div className="framebg flex flex-row flex-wrap w-70 rounded-md justify-center [&_*]:text-center p-1 ">

            {/* <StepBtn onClick={() => { }} symbol={'-'} /> */}
            <div className=" w-72 py-4 [&_*]:w-64 flex flex-row flex-wrap justify-center items-start">
                <input id={`Card${uuid}`} className="inputbg h-10 font-medium w-full" type="text" value={`${name} Card`} onChange={handleChange} placeholder={`${name} Card`} disabled />
                <ul id={`List${uuid}`} className="flex h-full flex-col flex-wrap items-start">
                    {listItems}
                </ul>
            </div>

            {/* <StepBtn onClick={() => { }} symbol={'+'} />*/}
        </div>

    )
}

export default ListView;