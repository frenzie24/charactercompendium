import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";
import ListInputCopmponent from "./ListInputComponent";

const CharacterList = ({ listName, handleChange }) => {

    // callback hook to pass to child list items
   // callback hook to pass to child list items

    return (

        <div className="flex flex-row flex-wrap w-70 justify-center [&_*]:text-center p-1 ">

            <StepBtn onClick={() => { }} symbol={'-'} />
            <div className="w-60 py-4 [&_*]:w-52 bg-gray-800 rounded-md flex flex-row flex-wrap justify-center">
                <input className="h-10 w-full border-b-2 border-purple-900" type="text" placeholder={`${listName} Card`} />
                <ul>
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${listName} Name`} />
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${listName} Name`} />
                    <ListInputCopmponent handleChange={handleChange}  placeholder={`${listName} Name`}  />

                </ul>
            </div>





            <StepBtn onClick={() => { }} symbol={'+'} />
        </div>



    )
}

export default CharacterList;