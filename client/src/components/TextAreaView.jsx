import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import validateState from "../utils/validateState";
import '../App.css'

//returns a flex element with an input field for a label and a text area for content
// we need to manage state for input, content, and uuid (uuid behaves best when stored as a state variable when setting this up, may not NEED as state but performed best for me)
// we need to managed input disabled state when user is editing!
const TextAreaView = ({ placeholder, HandleChange }) => {
    const [input, setInput] = useState('');
    const [content, setContent] = useState('');
    const [uuid, setUuid] = useState(uuidv4());

    // use the valididatestate script to check passed props for undefinded and fill them with generics if not
    let labelPlaceHolder = "";
    let contentPlaceHolder = ""
    if (placeholder) {
        labelPlaceHolder = validateState(placeholder.label, "Label");
        contentPlaceHolder = validateState(placeholder.content, "Content");
    }

    //handle input hook
    const handleInputChange = (ev) => {
      HandleChange(ev, setInput);
    }

    // when content's value changes handle it through our call back... why am i sending setcontent instead of the paramLOL
    const handleContentChange = (ev)=> HandleChange(ev, setContent);

    // log changes to console
    useEffect(() => {
        console.log(...['state updated\n', `input: ${input}\ndescription: ${content}`])
    }, [input, content])

    // we should move the li tag out this component!

    return (

        <li key={uuid} className="framebg flex flex-row flex-wrap justify-center h-80 items-end rounded-md w-96 p-2">
            {/*<>*/}
            <input id="input" className="inputbg h-12 w-[350px] text-center" placeholder={labelPlaceHolder} onChange={handleInputChange} value={input}></input>
            <textarea id="content" className="textareabg w-[360px] h-64 text-center min-h-48" placeholder={contentPlaceHolder} onChange={handleContentChange} value={content}></textarea>
            {/*</>*/}
        </li>
    );


}

export default TextAreaView