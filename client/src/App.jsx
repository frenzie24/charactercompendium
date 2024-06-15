import { useState } from 'react'
import './App.css'

import BottomView from './components/BottomView'

import TopView from './components/TopView'
import ImageView from './components/ImageView';
import PrimaryAttribute from './components/PrimaryAttribute';
import LabelView from './components/LabelView';
import LabelContainer from './components/LabelContainer';
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  const handleChange = (ev, setCallBackState) => {
    // ev.preventDefault();
    const target = ev.target;
    debugger;
    setCallBackState(target.value);

}

  return (
    <>
      <div className='tablebg flex flex-row flex-wrap w-screen justify-center items-start px-5 py5 '>
        <TopView HandleChange={handleChange}/>
        <BottomView HandleChange={handleChange}/>

      </div>

    </>
  )
}

export default App
