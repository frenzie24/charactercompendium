import { useEffect, useState } from 'react'
import './App.css'

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
  let statList = []
  let skillList = []
  const handleClick = (ev) => {

  }

  const handleListChange = (target, parent) => {
    let name = parent.getAttribute('name');
    let id = parent.id;

    if (name == 'Stat') {

      const obj = {
        value: target.value,
        id: id
      }
      const list = [...statList, target.value];
      statList = list;
    } else {
      const list = [...skillList, target.value];
      skillList = list;
    }
  }
  // THE parent handleChange hook, use this as an example when creating edit, save, and post hooks
  const handleChange = (ev, setCallBackState) => {

    ev.preventDefault();


    const target = ev.target;
    const parent = target.parentElement;
    setCallBackState(target.value);
    if (parent.tagName == "LI") {
      handleListChange(target, parent)
    }

    debugger;


  }

  // we need to take this and make a view for the character sheet
  return (
    <>
      <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
        <CharacterSheetView HandleChange={handleChange} Items={undefined}/>

      </div>

    </>
  )
}

export default App
