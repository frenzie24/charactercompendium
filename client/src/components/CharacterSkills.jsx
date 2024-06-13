import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";
import '../App.css'

const CharacterSkills = (props) => {

    return (
        <div className="flex flex-row flex-wrap p-2 rounded-md">
            <div className="flex flex-row flex-wrap w-fit bg-red-500 rounded-md p-2">
                <StepBtn onClick={() => { }} symbol={'-'} />
                <div className="w-52 rounded-md">
                    <li key={props.key} className="w-full bg-gray-200">
                        <input className="w-full rounded-md" type="text" placeholder="Skill Name" />
                    </li>

                    <li key={props.key} className="w-full bg-gray-200">
                        <input className="w-full rounded-md" type="text" placeholder="Skill Name" />
                    </li>

                    <li key={props.key} className="w-full bg-gray-200">
                        <input className="w-full rounded-md" type="text" placeholder="Skill Name" />
                    </li>

                    <li key={props.key} className="w-full bg-gray-200">
                        <input className="w-full rounded-md" type="text" placeholder="Skill Name" />
                    </li>
                </div>





                <StepBtn onClick={() => { }} symbol={'+'} />
            </div>



        </div>
    )
}

export default CharacterSkills;