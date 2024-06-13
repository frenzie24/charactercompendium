import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";

const CharacterList = ({ listName }) => {

    return (

        <div className="flex flex-row flex-wrap w-70 justify-center [&_*]:text-center p-1">

            <StepBtn onClick={() => { }} symbol={'-'} />
            <div className="w-60 py-4 [&_*]:w-52 bg-gray-800 rounded-md flex flex-row flex-wrap justify-center">
                <input className="h-10 w-full border-b-2 border-purple-900" type="text" placeholder={`${listName} Card`} />
                <ul>
                    <li className="border-b-2 border-red-900">
                        <input className="w-full" type="text" placeholder={`${listName} Name`} />
                    </li>
                    <li className="border-b-2 border-green-900">
                        <input className="w-full" type="text" placeholder={`${listName} Name`} />
                    </li>
                    <li className="border-b-2 border-blue-900">
                        <input className="w-full" type="text" placeholder={`${listName} Name`} />
                    </li>

                </ul>
            </div>





            <StepBtn onClick={() => { }} symbol={'+'} />
        </div>



    )
}

export default CharacterList;