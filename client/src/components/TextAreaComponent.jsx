import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
//returns a flex element with an input field for a label and a text area for content
const TextAreaComponent = ({ placeholder, handleChange }) => {
    const [input, setInput] = useState('');
    const [content, setContent] = useState('');
    const [uuid, setUuid] = useState(uuidv4());

    const labelPlaceHolder = placeholder ? placeholder.label ? placeholder.label : "Your label here" : "Your label here";
    const contentPlaceHolder = placeholder ? placeholder.content ? placeholder.content : "Your content here" : "Your content here";


    const _handleChange = (ev) => {
        if (ev.target.id === 'input') handleChange(ev, setInput);
        else handleChange(ev, setContent);
    }

    useEffect(() => {

let t = uuidv4();

        console.log(...['state updated\n', `input: ${input}\ndescription: ${content}`])
    }, [input, content])


    return (

        <li  key={uuid} className="flex flex-row flex-wrap justify-center items-center rounded-md bg-green-500 p-2">
            <input id="input" className="w-full text-center" placeholder={labelPlaceHolder} onChange={_handleChange} value={input}></input>
            <textarea id="content" className="w-full text-center min-h-48" placeholder={contentPlaceHolder} onChange={_handleChange} value={content}></textarea>

        </li>
    );


}

export default TextAreaComponent