/*
    Written by Dylan Thrasher and Charles Gross
    for
    Technomancy Inc., Team Rolled 2 for Init
*/

import React, { useState } from "react";
import '../../App.css'
import validateState from "../../utils/validateState";
/*
image view returns a figure with a caption and input.
input begins life hidden and will be shown during editing only.
During editing, figcaption is hidden
*/
const ImageView = ({Src, Caption, useHandleChange}) => {
    const [src, setSrc] = useState(Src ? Src : './notfound.jpg');
    const [caption, setCaption] = useState(validateState(Caption, 'Character Name'))
    const [editMode, setEditMode] = useState(false);
    const placeholder = "[Click to Update]";
    // pass the new value up to top
    // we may need to also do some work before passing the ev up, ie we need to debug and ensure we're getting the proper value from ev in the hook
    const handleInputChange = (ev) => { setCaption(ev.target.value)
        useHandleChange(ev, setCaption) ;
    }

    // filler function for when we handle editing
    // we are probably going to need a hook passed down
    const handleEditToggle = () => {
        // we need the input and figcation to be the negation of their current hidden state when this is called.
        setEditMode(!editMode);
    }

    const handleBlur = (ev) => {
        setEditMode(false); // Disable edit mode on blur (when user clicks away)
        // Optionally, you can handle saving the caption value here using useHandleChange
        // Passing caption up to parent component
    };

    // filler function for when we handle saving
    const handleSave = () => {
        // just in case we need a call back when we save
        // useHandleSave(caption)
    }
    return(
        <>
            <figure className="tablebg w-52 h-60 mt-2 flex flex-row flex-wrap justify-center items-center">
            <img className="mt-1 size-48" src={src} alt="caption" />
            {editMode ? (
                <input
                    className="text-center text-s text-b mb-1"
                    type="text"
                    name="ImageView"
                    value={caption}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    autoFocus // Focus on input when edit mode starts
                />
            ) : (
                <figcaption
                    className="text-center text-s text-b mb-1 cursor-pointer"
                    onClick={handleEditToggle}
                >
                    {caption == "" ? placeholder : caption}
                </figcaption>
            )}
        </figure>
        </>
    )
}

export default ImageView;