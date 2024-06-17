import React, { useState, useEffect } from "react";
import BottomView from "./BottomView";
import TopView from "./TopView";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ HandleChange, Items }) {

    const [editMode, setEditMode] = useState(false);
    debugger;
    const useHandleEditToggle = () => {
        debugger
        const edit = !editMode;
        setEditMode(edit);
    }

    return (
        <div className="[&_*]:placeholder:text-zinc-900">
            <TopView HandleChange={HandleChange} Items={Items} />
            <BottomView HandleChange={HandleChange} Items={Items}/>
        </div>
    );
}

export default CharacterSheetView