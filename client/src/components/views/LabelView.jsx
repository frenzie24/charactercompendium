import React, { useEffect, useState } from "react";
import validateState from "../../utils/validateState";

// LabelView stores text and src state, the text can be edited by users
// we need to add disbaled toggle for that input
const LabelView = ({ Text, Src, HandleChange, useGetEditMode }) => {
    const [text, setText] = useState(validateState(Text, 'Label'));
    const [src, setSrc] = useState(validateState(Src, './notfound.jpg'));
    const [editMode, setEditMode] = useState(useGetEditMode);

    const toggleHidden = (ev) => {
        {

        }
    }
    /*
    */

    // when the edit button on the top view is clicked, state is updated!  that means this useEffect is called (this useEffect is called whenver state updates so be VERY careful with it)
    useEffect(() => {
        console.count('LABEL VIEW STATE UPDATE')
        console.log('editMode' + editMode);
        setEditMode(useGetEditMode())
    })
    // handle change hook passed from parent
    const handleChange = (ev) => HandleChange(ev, setText)

    return (

        <div className=" flex justify-center items-center px-8">
            <div className="bgimage w-52 h-20 flex justify-center items-center">
                {!editMode ? (<input className="text-center round-lg w-36 pb-2 mb-2" value={text} onChange={handleChange} disabled></input>) :
                    (<input className="text-center round-lg w-36 pb-2 mb-2" value={text} onChange={handleChange}></input>)}
            </div>
        </div>
    );
};

export default LabelView;

