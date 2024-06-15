import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import validateState from "../utils/validateState";

const PrimaryAttribute =({Name, Src, Current, Max}) =>{
    // states to store the attributes name, source, current value and max value
    // we need to add the input and edit logic i added to image view to this caption as well... maybe this should just be an imageView...
    // ## TODO: refractor imageView to accept passed width and height and handle when not passed
    const [name, setInput] = useState(Name, 'Primary Attribute');
    const [source, setSource] = useState(validateState(Src,'./notfound.jpg' ));
    const [current, setCurrent]= useState(validateState(Current, ''));
    const [max, setMax] = useState(validateState(Max, ''));
    return(
        <>
            <figure className="w-36 h-48 flex flex-row flex-wrap justify-center">
                <img className="w-36 h-32" src={source}></img>
                <figcaption className="w-full h-12 text-center">{name}</figcaption>
            </figure>
        </>
    );

}

export default PrimaryAttribute;