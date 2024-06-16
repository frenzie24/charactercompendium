import React, {useState, useEffect} from "react";
import BottomView from "./BottomView";
import TopView from "./TopView";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({HandleChange}) {

    return (
    <>
        <TopView HandleChange={HandleChange}/>
        <BottomView HandleChange={HandleChange} />
    </>
    );
}

export default CharacterSheetView