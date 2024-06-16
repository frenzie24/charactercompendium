import React from "react";
import ImageView from "./ImageView";
import LabelContainer from "../LabelContainer";
import PrimaryAttribute from "../PrimaryAttribute";


// TopView needs to manage Caption state and add the HandleChange hook, this component is for styling the top portion of the character sheet's components
const TopView = ({HandleChange}) => {

    return (<div className='w-full flex flex-row flex-wrap justify-center items-center mt-12 pb-8 p-2'>

        <LabelContainer HandleChange={HandleChange}/>
        <ImageView Src="./test.png" Caption="Rozberyl"/>
        <div className='px-8 w-fit h-48 flex flex-row flex-wrap justify-center items-center [&_*]:p-1'>
            <PrimaryAttribute Name="HP" Src="./heart.png" />
            <PrimaryAttribute Name="Defense" Src="./shield.png" />
            <PrimaryAttribute Name="Dice" Src="./dicebg.png" />
        </div>
    </div>);
};

export default TopView;