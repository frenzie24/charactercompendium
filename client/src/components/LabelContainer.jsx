import React from "react";
import LabelView from './views/LabelView';
import validateState from "../utils/validateState";

// component to group, place and pass props to label views for character class and level
const LabelContainer = ({Text, Src, HandleChange, Items}) => {
    return(
        <div>
        <LabelView Text={Items.characterLevel} Src={"./label.png"} HandleChange={HandleChange} Items={Items} id={1}/>

        <LabelView Text={Items.characterClass} Src={"./label.png"} HandleChange={HandleChange} Items={Items} id={2}/>
      </div>
    )
}

export default LabelContainer;