import { useState } from 'react'
import './App.css'

import BottomView from './components/views/BottomView'
// need to add routing !
import TopView from './components/views/TopView'
import ImageView from './components/views/ImageView';
import PrimaryAttribute from './components/PrimaryAttribute';
import LabelView from './components/views/LabelView';
import LabelContainer from './components/LabelContainer';
import CharacterSheetView from './components/views/CharacterSheetView';


// i never remove count state from app, because I almost always eventually end up needing it at this level
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }
  // THE parent handleChange hook, use this as an example when creating edit, save, and post hooks
  const handleChange = (ev, setCallBackState) => {
    // ev.preventDefault();
    const target = ev.target;
    debugger;
    setCallBackState(target.value);

}
    // we need to take this and make a view for the character sheet
  return (
    <>
      <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
        <CharacterSheetView HandleChange={handleChange} />

      </div>

    </>
  )
}

export default App
