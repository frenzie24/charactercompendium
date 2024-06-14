import React from "react";

import ListView from './ListView'
import TextAreaView from './TextAreaView'

const BottomView = () => {

    const handleChange = (ev, setCallBackState) => {
        // ev.preventDefault();
        const target = ev.target;
        debugger;
        setCallBackState(target.value);

    }

    return (
        <section className="w-full flex flex-row flex-wrap">
            <ListView listName={"Stat"} HandleChange={handleChange} />
            <div className="w-[500px] flex flex-row flex-wrap justify-center">
                <TextAreaView placeholder={{ label: 'Feats and Description' }} HandleChange={handleChange} />
                <TextAreaView placeholder={{ label: 'Your character content here' }} HandleChange={handleChange} />
            </div>
            <ListView listName={"Skill"} HandleChange={handleChange} />
        </section>
    );
}

export default BottomView;
