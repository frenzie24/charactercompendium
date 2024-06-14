import React from "react";
import LabelView from './LabelView';

const LabelContainer = ({Text, Src}) => {
    return(
        <div>
        <LabelView Text={'Character Name'} Src={"./label.png"} />

        <LabelView Text={'Character Class'} Src={"./label.png"} />
      </div>
    )
}

export default LabelContainer;