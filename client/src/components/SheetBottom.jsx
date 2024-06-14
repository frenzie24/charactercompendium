import React from "react";

import ListView from './ListView'
import TextAreaComponent from './TextAreaComponent'

const SheetBottom = () => {

    const handleChange = (ev, setCallBackState) => {
       // ev.preventDefault();
        const target = ev.target;
        debugger;
        setCallBackState(target.value);

    }

    return (
        <>  <ListView listName={"Stat"} handleChange={handleChange} />
            <div className=''>
                <TextAreaComponent placeholder={{ label: 'Feats and Description' }} handleChange={handleChange} />
                <TextAreaComponent placeholder={{ label: 'Your character content here' }} handleChange={handleChange} />
            </div>
            <ListView listName={"Skill"} handleChange={handleChange} />
        </>
    );
}

export default SheetBottom;