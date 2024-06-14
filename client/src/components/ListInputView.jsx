import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// returns a li with input.  key attribute is created through uuid

const ListInputView = ({ placeholder, HandleChange }) => {
    const [key, setKey] = useState(uuidv4());
    const [input, setInput] = useState('');
    const [_placeholder, setPlaceholder] = useState(placeholder ? placeholder : 'Your input here <3')


    //when state updates, log thew new state
    useEffect(()=> {
        console.log(...['state updated\n', `input: ${input}`])
    }, [input])

    // our change hanlder alllll the way from SheetBottom
    // component flow goes SheetBottom -> ListView -> ListInputView
    const handleChange = (ev) => HandleChange(ev, setInput);

    return (
        <li key={key} className="border-b-2 border-red-900">
            <input className="w-full" type="text" onChange={handleChange} placeholder={_placeholder} />
        </li>
    );

}

export default ListInputView;