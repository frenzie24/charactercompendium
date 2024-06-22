import React from "react";
import ImageView from "./ImageView";
import LabelContainer from "../LabelContainer";
import PrimaryAttribute from "../PrimaryAttribute";


// TopView needs to manage Caption state and add the HandleChange hook, this component is for styling the top portion of the character sheet's components
const TopView = ({HandleChange, Items}) => {

//write hooks ehre if youw ant


    return (<div className='w-full flex flex-row flex-wrap justify-center items-end mt-12 p-2'>

        <LabelContainer HandleChange={HandleChange} Items={Items} />
        <ImageView Src="./test.png" Caption="" useHandleChange={HandleChange}/>
        <div className='px-8 w-fit h-48 flex flex-row flex-wrap justify-center items-start [&_*]:p-1'>
            <PrimaryAttribute Name="HP" Src="./heart.png" HandleChange={HandleChange}/>
            <PrimaryAttribute Name="Defense" Src="./shield.png" HandleChange={HandleChange}/>
            <PrimaryAttribute Name="Dice" Src="./dicebg.png" HandleChange={HandleChange}/>
        </div>




    </div>);
};

export default TopView;