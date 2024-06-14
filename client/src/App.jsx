import { useState } from 'react'
import './App.css'

import BottomView from './components/BottomView'
import ImageView from './components/ImageView';
import PrimaryAttribute from './components/PrimaryAttribute';
import LabelView from './components/LabelView';
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>
      <div className='flex flex-row flex-wrap w-screen justify-between items-start px-5 py-5 bg-purple-900'>
        <ImageView />
        <div>
        <LabelView Text={'Character Name'} Src={"./label.png"}/>

        <LabelView Text={'Character Class'} Src={"./label.png"}/>
        </div>
        <div className='w-96 h-48 flex flex-row flex-wrap justify-center items-center [&_*]:p-1'>
          <PrimaryAttribute Name="HP" Src="./heart.png" />
          <PrimaryAttribute Name="Defense" Src="./shield.png" />
        </div>
        <BottomView />

      </div>

    </>
  )
}

export default App
