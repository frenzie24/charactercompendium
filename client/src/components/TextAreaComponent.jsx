import React, { useEffect, useState } from "react";

//returns a flex element with an input field for a label and a text area for description
const TextAreaComponent = () => {
    const [input, setInput] = useState('');
    const [description, setDescription] = useState('');

    const handleChange =(ev) => {
        ev.preventDefault();
        const target = ev.target;

        if(target.type == "textarea") {
            setDescription(target.value);
        } else setInput(target.value);

    }

    useEffect(()=> {
        console.log(...['state updated\n', `input: ${input}\ndescription: ${description}`])
    }, [input, description])


    return (
        <section className="flex flex-row flex-wrap justify-center items-center">
            <input id="" className="w-full text-center" placeholder="LABEL" onChange={handleChange} value={input}></input>
            <textarea id="" className="w-full text-center min-h-" placeholder="DESCRITION" onChange={handleChange} value={description}></textarea>
        </section>
    )

}

export default TextAreaComponent