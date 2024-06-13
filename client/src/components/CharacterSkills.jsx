import React, { useState, useEffect } from "react";
import StepBtn from "./StepBtn";

const CharacterSkills = (props) => {

    return (
        <div className="flex flex-row flex-wrap p-2">
            <div className="flex flex-row flex-wrap w-fit">
                <StepBtn onClick={() => { }} symbol={'-'} />
                <div className="w-52">
                    <input className="w-full" type="text" placeholder="Skill Name" />

                    <input className="w-full" type="text" placeholder="Skill Name" />



                    <input className="w-full" type="text" placeholder="Skill Name" />

                    <input className="w-full" type="text" placeholder="Skill Name" />
                </div>





                <StepBtn onClick={() => { }} symbol={'+'} />
            </div>



        </div>
    )
}

export default CharacterSkills;