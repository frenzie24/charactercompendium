import { useState } from 'react'
import './App.css'

import BottomView from './components/BottomView'
import ImageView from './components/ImageView';
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>
      <div className='flex flex-row flex-wrap w-screen justify-between items-start px-5 py-5 bg-purple-900'>
      <ImageView />
    <BottomView />

      </div>

    </>
  )
}

export default App
