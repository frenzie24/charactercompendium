import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import BottomView from "./BottomView";
import TopView from "./TopView";
import { ADD_CHARACTER } from '../../utils/mutations';

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ HandleChange }) {

    const [editMode, setEditMode] = useState(false);
    const [addCharacter] = useMutation(ADD_CHARACTER);

    const useGetEditMode = () => {

        return editMode;
    }

    const useHandleEditToggle = () => {
        debugger
        const edit = !editMode;
        setEditMode(edit);
    }

    const handleAddCharacter = async () => {
        try {
            const { data } = await addCharacter({
                variables: {
                    userID: "666cb84b41fa64e11ab225e3",
                    characterName: "Tester",
                    characterClass: "Generic",
                    health: "1/2",
                    defense: "+1",
                    baseStat: ["STR:10", "DEX:14", "CON:12", "WIS:14", "INT:17", "CHA:8"],
                    skill: ["Arcana:5", "Stealth:3"],
                    inventory: ["One Spellbook"],
                    notes: ["Nothing of note"]
                },
            });
            console.log('Character added', data);
        } catch (err) {
            console.error('Error adding character', err);
        console.error('GraphQL error details:', err.graphQLErrors);
        console.error('Network error details:', err.networkError);
        }
    }

    return (
        <>
            <TopView HandleChange={HandleChange} useGetEditMode={useGetEditMode} useHandleEditToggle={useHandleEditToggle} />
            <button onClick={handleAddCharacter}>Add Dummy Character</button>
            <BottomView HandleChange={HandleChange} useGetEditMode={useGetEditMode} />
        </>
    );
}

export default CharacterSheetView