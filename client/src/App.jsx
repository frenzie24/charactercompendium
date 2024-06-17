import { useEffect, useState } from 'react'
import './App.css'
import { ADD_CHARACTER, LOGIN_USER, ADD_USER } from './utils/mutations';

import { useMutation } from '@apollo/client';

import AuthService from "./utils/auth";
import BottomView from './components/views/BottomView'
// need to add routing !
import TopView from './components/views/TopView'
import ImageView from './components/views/ImageView';
import PrimaryAttribute from './components/PrimaryAttribute';
import LabelView from './components/views/LabelView';
import LabelContainer from './components/LabelContainer';
import CharacterSheetView from './components/views/CharacterSheetView';


import { v4 as uuidv4 } from 'uuid';

/*
const genDummyInputList = (listName) => {
  let dummy = [];
  const uuid = uuidv4();
  for (let i = 0; i < 10; i++) {
    dummy.push({
      value: `${listName}: ${i}`,
      id: uuid
    })
  }
  return dummy;
}*/


// i never remove count state from app, because I almost always eventually end up needing it at this level
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';
  const [baseStat, setBaseStat] = useState([])
  const [skill, setSkill] = useState([]);

  const [inventory, setInventory] = useState([])
  const [notes, setNotes] = useState()
  const [health, setHealth] = useState();
  const [defense, setDefense] = useState();
  const [characterName, setCharacterName] = useState();
  const [characterClass, setCharacterClass] = useState();

  const [imageView, setImageView] = useState({});

  const [login, { error, data }] = useMutation(LOGIN_USER);

  const [addCharacter, { cerror, cdata }] = useMutation(ADD_CHARACTER);

  const handleClick = (ev) => {

  }

  // logic to update/populate empty stat/skill lists
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

    if (target.id == "Health") {
      setHealth(obj)
    } else setDefense(obj)
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
// THE parent handleChange hook, use this as an example when creating edit, save, and post hooks
const handleChange = (ev, setCallBackState) => {

  ev.preventDefault();


  const target = ev.target;
  const parent = target.parentElement;
  const tag = parent.tagName;
  //set the state of the component that called the hook
  setCallBackState(target.value);

  if (tag == "LI") {
    handleListChange(target, parent);
  } else if (tag == "SPAN") {

    handleLabelChange(target, parent);

  } else if (tag == "DIV") {
    if (target.name == "Primary") {
      handlePrimaryChange(target, parent);
    }
  } else if (tag == "SECTION") {
    handleTextAreaChange(target, parent);
  } else if (tag == "FIGURE") {
    handleImageInputChange(target, parent);
  }

  debugger;


}

const getData = async (ev) => {
  let temp = [skill, baseStat, inventory, notes, health, defense, characterName, characterClass];
  ev.preventDefault()
  if (!AuthService.loggedIn()) {
    console.error('User is not logged in');
    return;
  }
  //let vals = GetData(ev);
  try {
    debugger;
    const { data } = await addCharacter({
      variables: {
        userID: AuthService.getProfile().data._id, // Ensure you get the userID from the token
        characterName:JSON.stringify(characterName),
        characterClass:JSON.stringify( characterClass),
        health:JSON.stringify( health),
        defense:JSON.stringify( defense),
        baseStat:JSON.stringify( baseStat),
        skill:JSON.stringify( skill),
        inventory:JSON.stringify( inventory),
        notes:JSON.stringify( notes)
      },
    });
    console.log('Character added', data);
  } catch (err) {
    console.error('Error adding character', err);
    console.error('GraphQL error details:', err.graphQLErrors);
    console.error('Network error details:', err.networkError);
  }
}

// we need to take this and make a view for the character sheet
return (
  <>
    <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
      <CharacterSheetView HandleChange={handleChange} getData={getData} Items={undefined} />

    </div>

  </>
)
}

export default App
