import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// returns a li with input.  key attribute is created through uuid

const ListInputCopmponent = ({ placeholder, handleChange }) => {
    const [key, setKey] = useState(uuidv4());
    const [input, setInput] = useState('');

    useEffect(()=> {
        console.log(...['state updated\n', `input: ${input}`])
    }, [input])

    const _handleChange = (ev) => handleChange(ev, setInput);
    return (
        <li key={key} className="border-b-2 border-red-900">
            <input className="w-full" type="text" onChange={_handleChange} placeholder={placeholder ? placeholder : 'Your input here <3'} />
        </li>
    );


}

export default ListInputCopmponent;