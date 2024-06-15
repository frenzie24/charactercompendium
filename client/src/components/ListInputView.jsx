import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

// returns a li with input.  key attribute is created through uuid

const ListInputView = ({ placeholder, HandleChange }) => {
    // we need the key state for when we add a list item to the list
    // same with id!
    // key *only* needs to be unique per list so uuid is likely overkill

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
        <li key={key} className=" ">
            <input className="inputbg text-black" type="text" onChange={handleChange} placeholder={_placeholder} />
        </li>
    );

}

export default ListInputView;