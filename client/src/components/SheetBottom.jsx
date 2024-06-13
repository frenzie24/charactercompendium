import React from "react";

import CharacterList from './CharacterList'
import TextAreaComponent from './TextAreaComponent'

const SheetBottom = () => {
    return (
        <>  <CharacterList listName={"Stat"} />
            <div className=''>
                <TextAreaComponent placeholder={{ label: 'Feats and Description' }} />
                <TextAreaComponent placeholder={{ label: 'Your character content here' }} />
            </div>
            <CharacterList listName={"Skill"} />
        </>
    );
}

export default SheetBottom;