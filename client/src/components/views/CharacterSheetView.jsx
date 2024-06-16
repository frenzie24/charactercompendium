import React, { useState, useEffect } from "react";
import BottomView from "./BottomView";
import TopView from "./TopView";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ HandleChange }) {

    const [editMode, setEditMode] = useState(false);

    const useGetEditMode = () => {

        return editMode;
    }

    const useHandleEditToggle = () => {
        debugger
        const edit = !editMode;
        setEditMode(edit);
    }

    return (
        <>
            <TopView HandleChange={HandleChange} useGetEditMode={useGetEditMode} useHandleEditToggle={useHandleEditToggle }/>
            <BottomView HandleChange={HandleChange} useGetEditMode={useGetEditMode}/>
        </>
    );
}

export default CharacterSheetView