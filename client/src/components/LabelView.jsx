import React, { useState } from "react";
import validateState from "../utils/validateState";

// LabelView stores text and src state, the text can be edited by users
// we need to add disbaled toggle for that input
const LabelView = ({ Text, Src, HandleChange }) => {
    const [text, setText] = useState(validateState(Text, 'Label'));
    const [src, setSrc] = useState(validateState(Src, './notfound.jpg'));

    const toggleHidden = (ev) => {{

    }}

    // handle change hook passed from parent
    const handleChange =(ev)=> HandleChange(ev, setText)
    return (
        <div className=" flex justify-center items-center px-8">
            <div className="bgimage w-52 h-20 flex justify-center items-center">
                <input className="text-center round-lg w-36 pb-2 mb-2" value={text} ></input>
            </div>
        </div>
    );
};

export default LabelView;
