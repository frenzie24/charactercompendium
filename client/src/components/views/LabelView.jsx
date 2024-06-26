import React, { useEffect, useState } from "react";
import validateState from "../../utils/validateState";
import InputView from "./InputView";

// LabelView stores text and src state, the text can be edited by users
// we need to add disbaled toggle for that input
const LabelView = ({ Text, Src, HandleChange, Items, id}) => {
    const [text, setText] = useState(validateState(Text, 'Label'));
    const [src, setSrc] = useState(validateState(Src, './notfound.jpg'));
    const [editMode, setEditMode] = useState(false);

    const toggleHidden = (ev) => {
        {

        }
    }
    /*
    */
    const handleClick = () => {

        setEditMode(!editMode); // Enable edit mode when user clicks on the displayed value
    };


    const handleBlur = () => {
        setEditMode(false); // Disable edit mode on blur (when user clicks away)
    };
    // when the edit button on the top view is clicked, state is updated!  that means this useEffect is called (this useEffect is called whenver state updates so be VERY careful with it)

    // handle change hook passed from parent
    const handleChange = (ev) => HandleChange(ev, setText)

    return (

        <div className=" flex justify-center items-center px-8" onClick={handleClick} >
            <span id={id} name={'Label'} className="bgimage w-52 h-20 flex justify-center items-center"  onClick={handleClick} >

               <input id={id} type='text' className="text-center round-lg w-36 pb-2 mb-2" value={text} onChange={handleChange} autoFocus ></input>
            </span>
        </div>
    );
};

export default LabelView;

