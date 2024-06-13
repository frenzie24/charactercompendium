import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// returns a li with input.  key attribute is created through uuid

const ListInputCopmponent = ({ placeholder, handleChange }) => {
    const [key, setKey] = useState(uuidv4());
    const [input, setInput] = useState('');
    const [_placeholder, setPlaceholder] = useState(placeholder ? placeholder : 'Your input here <3')
    const [uuid, setUuid] = useState(uuidv4());

    //when state updates, log thew new state
    useEffect(()=> {

        console.log(...['state updated\n', `input: ${input}`])
    }, [input])

    const _handleChange = (ev) => handleChange(ev, setInput);
    return (
        <li key={uuid} className="border-b-2 border-red-900">
            <input className="w-full" type="text" onChange={_handleChange} placeholder={_placeholder} />
        </li>
    );


}

export default ListInputCopmponent;