import React, { Button } from 'react';
import '../App.css'
const StepBtn = ({onClick, symbol}) => {

    //this component's entire logic is handled by its parent passing the onClick callback
    return (
        <div className="p-1">
        <button className='rounded-full text-white flex justify-center items-center size-6 bg-neutral-500 p-1' onClick={onClick}>
           {symbol}
        </button>
        </div>
    );
};

export default StepBtn;