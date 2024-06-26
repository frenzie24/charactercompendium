import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import BottomView from "./BottomView";
import TopView from "./TopView";
import { ADD_CHARACTER, LOGIN_USER } from '../../utils/mutations';
import AuthService from "../../utils/auth";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ HandleChange, Items }) {

    const [editMode, setEditMode] = useState(false);

    const useHandleEditToggle = () => {

        const edit = !editMode;
        setEditMode(edit);
    }

    const handleAddCharacter = async () => {
        if (!AuthService.loggedIn()) {
            console.error('User is not logged in');
            return;
        }

        try {
            const { data } = await addCharacter({
                variables: {
                    userID: AuthService.getProfile().data._id, // Ensure you get the userID from the token
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
    };

    const handleLogin = async () => {
        try {
            const { data } = await login({
                variables: {
                    email: "test1@test.com",
                    password: "test1"
                },
            });
            AuthService.login(data.login.token);
            console.log('Login successful', data);
            // Optionally, redirect or perform additional actions upon successful login
        } catch (err) {
            console.error('Error logging in', err);
            console.error('GraphQL error details:', err.graphQLErrors);
            console.error('Network error details:', err.networkError);
        }
    }

    return (
        <div className="[&_*]:placeholder:text-zinc-900">
            <TopView HandleChange={HandleChange} Items={Items} />
            <BottomView HandleChange={HandleChange} Items={Items}/>
        </div>
    );
}

export default CharacterSheetView