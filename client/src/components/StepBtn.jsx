import React, { Button } from 'react';
import '../App.css'
const StepBtn = (props) => {


    return (
        <div className="p-1">
        <button className='rounded-full text-white flex justify-center items-center size-6 bg-neutral-500 p-1' onClick={props.onClick}>
           {props.symbol}
        </button>
        </div>
    );
};

export default StepBtn;