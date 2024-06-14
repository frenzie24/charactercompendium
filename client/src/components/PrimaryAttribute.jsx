import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const PrimaryAttribute =({name, src}) =>{
    const [input, setInput] = useState(name);
    const [source, setSource] = useState(src);

    return(
        <>
            <figure>
                <img src=></img>
            </figure>
        </>
    );

}

export default PrimaryAttribute;