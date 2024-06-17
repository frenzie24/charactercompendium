import React from "react";

import ListView from './ListView'
import TextAreaView from '../TextAreaView'

// component to style and pass props to children
const BottomView = ({HandleChange, useGetVal}) => {


    return (
        <section className=" flex flex-row flex-wrap justify-center mt-4 mb-12 text-black">
            <ListView listName={"Stat"} HandleChange={HandleChange} useGetVal={useGetVal}/>
            <div className="w-96 mx-6 flex flex-row flex-wrap justify-center">
                <TextAreaView placeholder={{ label: 'Feats and Description' }} HandleChange={HandleChange} />
                <TextAreaView placeholder={{ label: 'Your character content here' }} HandleChange={HandleChange} />
            </div>
            <ListView listName={"Skill"} HandleChange={HandleChange} useGetVal={useGetVal}/>
        </section>
    );
}

export default BottomView;
