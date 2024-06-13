import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";

const CharacterList = ({ listName }) => {

    return (

        <div className="flex flex-row flex-wrap w-70 justify-center [&_*]:text-center p-1">
            <div className="w-full h-10 flex flex-row flex-wrap justify-center ">
                <input className="w-56 h-10" type="text" placeholder={`${listName} Card`} />
            </div>
            <StepBtn onClick={() => { }} symbol={'-'} />
            <div className="w-56">
                <input className="w-full" type="text" placeholder={`${listName}  Name`} />

                <input className="w-full" type="text" placeholder={`${listName}  Name`} />



                <input className="w-full" type="text" placeholder={`${listName}  Name`} />

                <input className="w-full" type="text" placeholder={`${listName}  Name`} />
            </div>





            <StepBtn onClick={() => { }} symbol={'+'} />
        </div>



    )
}

export default CharacterList;