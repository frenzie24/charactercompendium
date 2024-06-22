import React from "react";

import ListView from './ListView'
import TextAreaView from '../TextAreaView'

// component to style and pass props to children
const BottomView = ({HandleChange, Items}) => {


    return (
        <section className=" flex flex-row flex-wrap justify-center mt-4 mb-12 text-black">
            <ListView listName={"Stat"} HandleChange={HandleChange} Items={Items.baseStats}/>
            <div className="w-96 mx-6 flex flex-row flex-wrap justify-center">
                <TextAreaView Items={Items.notes} HandleChange={HandleChange}  id={1}/>
                <TextAreaView placeholder={{ label: 'Your character content here' }} HandleChange={HandleChange} Items={Items.inventory} id={2}/>
            </div>
            <ListView listName={"Skill"} HandleChange={HandleChange} Items={Items.skills}/>
        </section>
    );
}

export default BottomView;
