import React, { useState, useEffect } from "react";

import '../../App.css'
import validateState from "../../utils/validateState";
import { v4 as uuidv4 } from 'uuid';
// returns a li with input.  key attribute is created through uuid

const Inputview = ({ placeholder, HandleChange, Value, Key }) => {
    // we need the key state for when we add a list item to the list
    // same with id!
    // key *only* needs to be unique per list so uuid is likely overkill

    const [input, setInput] = useState(Value ? Value : 'Your input here <3');
    //const [_placeholder, setPlaceholder] = useState(placeholder ? placeholder : 'Your input here <3');
    const [editMode, setEditMode] = useState(false);
    const [key, setKey] = (validateState(Key, uuidv4()));

    //when state updates, log thew new state
    useEffect(() => {
        console.log(...['state updated\n', `input: ${input}`])
        //  setEditMode(Items())
    }, [input])

    // our change hanlder alllll the way from SheetBottom
    // component flow goes SheetBottom -> ListView -> Inputview
    const handleChange = (ev) =>{ HandleChange(ev, setInput);
}
    const handleBlur = () => {
        setEditMode(false); // Disable edit mode on blur (when user clicks away)
    };

    const handleClick = () => {
        setEditMode(!editMode); // Enable edit mode when user clicks on the displayed value
    };

    const getVal = () => {
        Items(input);
    }

    return (

        <>
            {editMode ?
                (<input id={`input${key}`} type='text' className="inputbg text-black text-center h-8 round-lg w-36" value={input} onChange={handleChange} onBlur={handleBlur} autoFocus></input>) :
                (<h4 id={`h4${key}`} className=" inputbg text-black text-center round-lg w-36 h-8" onClick={handleClick}>{input ? input : input}</h4>)}
        </>
    );

}

export default Inputview;