import React from "react";
import ImageView from "./ImageView";
import LabelContainer from "./LabelContainer";
import PrimaryAttribute from "./PrimaryAttribute";

const TopView = () => {
    return (<div className='flex flex-row flex-wrap justify-center p-2'>
        <ImageView />
        <LabelContainer />
        <div className='w-96 h-48 flex flex-row flex-wrap justify-center items-center [&_*]:p-1'>
            <PrimaryAttribute Name="HP" Src="./heart.png" />
            <PrimaryAttribute Name="Defense" Src="./shield.png" />
        </div>
    </div>);
};

export default TopView;