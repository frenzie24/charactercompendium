import React from "react";

import CharacterList from './CharacterList'
import TextAreaComponent from './TextAreaComponent'

const SheetBottom = () => {

    const handleChange = (ev, setCallBackState) => {
       // ev.preventDefault();
        const target = ev.target;
        debugger;
        setCallBackState(target.value);

    }

    return (
        <>  <CharacterList listName={"Stat"} handleChange={handleChange} />
            <div className=''>
                <TextAreaComponent placeholder={{ label: 'Feats and Description' }} handleChange={handleChange} />
                <TextAreaComponent placeholder={{ label: 'Your character content here' }} handleChange={handleChange} />
            </div>
            <CharacterList listName={"Skill"} handleChange={handleChange} />
        </>
    );
}

export default SheetBottom;