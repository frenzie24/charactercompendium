import React from "react";
import LabelView from './views/LabelView';
import validateState from "../utils/validateState";

// component to group, place and pass props to label views for character class and level
const LabelContainer = ({Text, Src, HandleChange, useGetEditMode}) => {
    return(
        <div>
        <LabelView Text={'Character Level'} Src={"./label.png"} HandleChange={HandleChange} useGetEditMode={useGetEditMode} />

        <LabelView Text={'Character Class'} Src={"./label.png"} HandleChange={HandleChange} useGetEditMode={useGetEditMode} />
      </div>
    )
}

export default LabelContainer;