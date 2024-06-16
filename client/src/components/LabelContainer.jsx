import React from "react";
import LabelView from './views/LabelView';
import validateState from "../utils/validateState";

// component to group, place and pass props to label views for character class and level
const LabelContainer = ({Text, Src}) => {
    return(
        <div>
        <LabelView Text={'Character Name'} Src={"./label.png"} />

        <LabelView Text={'Character Class'} Src={"./label.png"} />
      </div>
    )
}

export default LabelContainer;