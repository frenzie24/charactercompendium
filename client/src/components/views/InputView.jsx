import React, { useState, useEffect } from "react";

import '../../App.css'

// returns a li with input.  key attribute is created through uuid

const ListInputView = ({ placeholder, HandleChange, useGetVal }) => {
    // we need the key state for when we add a list item to the list
    // same with id!
    // key *only* needs to be unique per list so uuid is likely overkill

    const [input, setInput] = useState('');
    const [_placeholder, setPlaceholder] = useState(placeholder ? placeholder : 'Your input here <3');
    const [editMode, setEditMode] = useState(false);


    //when state updates, log thew new state
    useEffect(() => {
        console.log(...['state updated\n', `input: ${input}`])
        //  setEditMode(useGetVal())
    }, [input])

    // our change hanlder alllll the way from SheetBottom
    // component flow goes SheetBottom -> ListView -> ListInputView
    const handleChange = (ev) => HandleChange(ev, setInput);

    const handleBlur = () => {
        setEditMode(false); // Disable edit mode on blur (when user clicks away)
    };

    const handleClick = () => {
        setEditMode(!editMode); // Enable edit mode when user clicks on the displayed value
    };

    const getVal = () => {

    }

    return (

        <>
            {editMode ?
                (<input type='text' className="inputbg text-black text-center h-8 round-lg w-36" value={input} onChange={handleChange} onBlur={handleBlur} autoFocus placeholder={_placeholder}></input>) :
                (<h4 className=" inputbg text-black text-center round-lg w-36 h-8" onClick={handleClick}>{input ? input : _placeholder}</h4>)}
        </>
    );

}

export default ListInputView;