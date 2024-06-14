import React, { useState } from "react";
import validateState from "../utils/validateState";

const LabelView = ({ Text, Src }) => {
    const [text, setText] = useState(validateState(Text, 'Label'));
    const [src, setSrc] = useState(validateState(Src, './notfound.jpg'));

    return (
        <div className=" flex justify-center items-center">
            <div className="bgimage w-48 h-20 flex justify-center items-center">
                <h2 className="text-center pb-2">{text}</h2>
            </div>
        </div>
    );
};

export default LabelView;
