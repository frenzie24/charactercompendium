import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import validateState from "../utils/validateState";


const PrimaryAttribute = ({ Name, Src, HandleChange, Items, id }) => {
    const [name, setName] = useState(Name); // State for attribute name
    const [source, setSource] = useState(validateState(Src, './notfound.jpg')); // State for image source
    const [editMode, setEditMode] = useState(false); // State for edit mode
    const [value, setValue] = useState("");  // State for attribute value
    const placeholder = "[Click to Update]";

    const handleInputChange = (ev) => {
        const { value } = ev.target;
        setValue(value);
        HandleChange(ev, setValue);
    };

    const handleBlur = () => {
        setEditMode(false); // Disable edit mode on blur (when user clicks away)
    };

    const handleClick = () => {
        setEditMode(!editMode); // Enable edit mode when user clicks on the displayed value
    };

    return (
        <figure className="w-36 h-48 flex flex-col justify-center items-center">
            <img className="w-36 h-32" src={source} alt={name} />
            {editMode ? (
                <div className="w-full h-12 text-center">
                    <input
                        id={name}
                        className="text-center w-28 rounded-lg mb-1"
                        type="text"
                        name="Primary"
                        value={value}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        autoFocus // Focus on input when edit mode starts
                        placeholder="[Click to Update]"
                    />
                </div>
            ) : (
                <figcaption className="w-full h-12 text-center cursor-pointer" onClick={handleClick}>
                    {value == "" ? placeholder : value}
                </figcaption>
            )}
            <figcaption className="w-full h-12 text-center">{name}</figcaption>
        </figure>
    );
};

export default PrimaryAttribute;


// const PrimaryAttribute =({Name, Src, Current, Max}) =>{
//     // states to store the attributes name, source, current value and max value
//     // we need to add the input and edit logic i added to image view to this caption as well... maybe this should just be an imageView...
//     // ## TODO: refractor imageView to accept passed width and height and handle when not passed
//     const [name, setInput] = useState(Name, 'Primary Attribute');
//     const [source, setSource] = useState(validateState(Src,'./notfound.jpg' ));
//     const [current, setCurrent]= useState(validateState(Current, ''));
//     const [max, setMax] = useState(validateState(Max, ''));
//     return(
//         <>
//             <figure className="w-36 h-48 flex flex-row flex-wrap justify-center">
//                 <img className="w-36 h-32" src={source}></img>
//                 <figcaption className="w-full h-12 text-center">{name}</figcaption>
//             </figure>
//         </>
//     );

// }

// export default PrimaryAttribute;