import React from "react";

import ListView from './ListView'
import TextAreaView from '../TextAreaView'

// component to style and pass props to children
const BottomView = ({HandleChange, useGetEditMode}) => {


    return (
        <section className=" flex flex-row flex-wrap justify-center my-12 text-black">
            <ListView listName={"Stat"} HandleChange={HandleChange} useGetEditMode={useGetEditMode}/>
            <div className="w-96 mx-6 flex flex-row flex-wrap justify-center">
                <TextAreaView placeholder={{ label: 'Feats and Description' }} HandleChange={HandleChange} />
                <TextAreaView placeholder={{ label: 'Your character content here' }} HandleChange={HandleChange} />
            </div>
            <ListView listName={"Skill"} HandleChange={HandleChange} useGetEditMode={useGetEditMode}/>
        </section>
    );
}

export default BottomView;
