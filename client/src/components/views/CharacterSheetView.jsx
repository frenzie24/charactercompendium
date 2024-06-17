import React, { useState, useEffect } from "react";
import BottomView from "./BottomView";
import TopView from "./TopView";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ HandleChange }) {

    const [editMode, setEditMode] = useState(false);

    const useGetVal = () => {

        return editMode;
    }

    const useHandleEditToggle = () => {
        debugger
        const edit = !editMode;
        setEditMode(edit);
    }

    return (
        <div className="[&_*]:placeholder:text-zinc-900">
            <TopView HandleChange={HandleChange} useGetVal={useGetVal} useHandleEditToggle={useHandleEditToggle }/>
            <BottomView HandleChange={HandleChange} useGetVal={useGetVal}/>
        </div>
    );
}

export default CharacterSheetView