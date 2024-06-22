import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import BottomView from "./BottomView";
import TopView from "./TopView";
import { ADD_CHARACTER, LOGIN_USER } from '../../utils/mutations';
import AuthService from "../../utils/auth";

// component to style and render top and bottom views of character sheets ;)
function CharacterSheetView({ Items }) {

    const [editMode, setEditMode] = useState(false);
    const [baseStat, setBaseStat] = useState([])
    const [skill, setSkill] = useState([]);

    const [inventory, setInventory] = useState([])
    const [notes, setNotes] = useState('')
    const [health, setHealth] = useState('');
    const [defense, setDefense] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [characterClass, setCharacterClass] = useState('');

    const buildListData = (list, target, parent) => {
        let id = parent.id;
        const obj = {
            value: target.value,
            id: id,
            inputId: target.id
        }

        if (list.length <= 0) {
            list = [obj];
        } else {
            let found = false;
            list.map((stat, idx) => {
                if (stat.inputId === target.id) {
                    found = true;
                    return list[idx] = obj;

                }
            });

            if (!found) list.push(obj);
        } return list;
    }
    // when a text input component in a list item changes
    const handleListChange = (target, parent) => {
        let name = parent.getAttribute('name');

        if (name == 'Stat') {
            setBaseStat(buildListData(baseStat, target, parent))

        } else {
            setSkill(buildListData(skill, target, parent))
        }
    }

    const handleLabelChange = (target, parent) => {
        const id = parent.id;
        const inputId = target.id;
        const obj = {
            value: target.value,
            id: id,
            inputId: inputId
        }

        // there are only ever 2 possible character labels, and they always are rendered together
        if (inputId == 1) {
            setCharacterName(obj)
        } else setCharacterClass(obj)
    }

    const handlePrimaryChange = (target, parent) => {
        const id = parent.id;
        const inputId = target.id;
        const obj = {
            value: target.value,
            id: id,
            inputId: inputId,
            label: target.id
        }

        // there are only ever 2 possible character labels, and they always are rendered together

        if (target.id == "HP") {
            setHealth(obj)
        } else
            setDefense(obj);
    }


    const handleTextAreaChange = (target, parent) => {
        const id = parent.id;
        const inputId = target.id;
        const obj = {
            input: inputId == 'input' ? target.value : parent.children[0].value,
            content: inputId == 'content' ? target.value : parent.children[1].value,
            id: id,
            inputId: inputId,
        }
        // there are only 2 textarea containers for now
        if (inputId == 'input') {
            setNotes(obj)
        } else setInventory(obj)
    }


    const handleImageInputChange = (target, parent) => {
        const obj = {
            input: target.value,
            img: parent.children[0].src

        }

        setImageView(obj)
    }
    const handleChange = (ev, setCallBackState) => {

        ev.preventDefault();


        const target = ev.target;
        const parent = target.parentElement;
        const tag = parent.tagName;
        //set the state of the component that called the hook
        setCallBackState(target.value);

        if (tag == "LI") {
            handleListChange(target, parent)
        } else if (tag == "SPAN") {

            handleLabelChange(target, parent)

        } else if (tag == "DIV") {
            if (target.name == "Primary") {
                handlePrimaryChange(target, parent);
            }
        } else if (tag == "SECTION") {
            handleTextAreaChange(target, parent)
        } else if (target.name == "ImageView") {
            setCharacterName(target.value);
        }

        console.log(target.name)

        debugger;

        // HandleChange(ev, setCallBackState);
    }
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

    useEffect(() => {
        console.log('state updated: ' + health)
        console.log('state updated: ' + defense)
        console.log('state updated: ' + inventory)
        console.log('state updated: ' + notes)
        console.log('state updated: ' + characterClass)
        console.log('state updated: ' + characterName)

    }, [health, defense, inventory, notes, baseStat, skill, characterName, characterClass])
    return (
        <div className="[&_*]:placeholder:text-zinc-900">
            <TopView HandleChange={handleChange} Items={Items} />
            <BottomView HandleChange={handleChange} Items={Items} />
        </div>
    );
}

export default CharacterSheetView