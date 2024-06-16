import React from "react";
import ImageView from "./ImageView";
import LabelContainer from "../LabelContainer";
import PrimaryAttribute from "../PrimaryAttribute";


// TopView needs to manage Caption state and add the HandleChange hook, this component is for styling the top portion of the character sheet's components
const TopView = ({HandleChange, useGetEditMode, useHandleEditToggle}) => {

//write hooks ehre if youw ant


    return (<div className='w-full flex flex-row flex-wrap justify-center items-center mt-12 pb-8 p-2'>

        <LabelContainer HandleChange={HandleChange} useGetEditMode={useGetEditMode} />
        <ImageView Src="./test.png" Caption=""/>
        <div className='px-8 w-fit h-48 flex flex-row flex-wrap justify-center items-center [&_*]:p-1'>
            <PrimaryAttribute Name="HP" Src="./heart.png" />
            <PrimaryAttribute Name="Defense" Src="./shield.png" />
            <PrimaryAttribute Name="Dice" Src="./dicebg.png" />
        </div>


        <div className="p-1">
        <button className='rounded-full text-white flex justify-center items-center size-6 bg-neutral-500 p-1' onClick={useHandleEditToggle}>
           {'EDIT'}
        </button>
        </div>


    </div>);
};

export default TopView;