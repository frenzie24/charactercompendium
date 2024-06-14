import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import validateState from "../utils/validateState";

//returns a flex element with an input field for a label and a text area for content
const TextAreaView = ({ placeholder, HandleChange }) => {
    const [input, setInput] = useState('');
    const [content, setContent] = useState('');
    const [uuid, setUuid] = useState(uuidv4());
    let labelPlaceHolder = "";
    let contentPlaceHolder = ""
    if (placeholder) {
        labelPlaceHolder = validateState(placeholder.label, "Label");
        contentPlaceHolder = validateState(placeholder.content, "Content");
    }

    const handleInputChange = (ev) => {
      HandleChange(ev, setInput);
    }

        // when content's value changes handle it through our call back... why am i sending setcontent instead of the paramLOL
    const handleContentChange = (ev)=> HandleChange(ev, setContent);

    useEffect(() => {



        console.log(...['state updated\n', `input: ${input}\ndescription: ${content}`])
    }, [input, content])

    // we should move the li tag out this component!

    return (

        <li key={uuid} className="flex flex-row flex-wrap justify-center items-center rounded-md bg-green-500 p-2">
            <>
            <input id="input" className="w-full text-center" placeholder={labelPlaceHolder} onChange={handleInputChange} value={input}></input>
            <textarea id="content" className="w-full text-center min-h-48" placeholder={contentPlaceHolder} onChange={handleContentChange} value={content}></textarea>
            </>
        </li>
    );


}

export default TextAreaView