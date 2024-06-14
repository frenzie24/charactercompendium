import { useState } from 'react'
import './App.css'

import SheetBottom from './components/SheetBottom'
import ImageComponent from './components/ImageComponent';
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>
      <div className='flex flex-row flex-wrap w-screen justify-between items-start px-5 py-5 bg-purple-900'>

    <SheetBottom />
    <ImageComponent />
      </div>

    </>
  )
}

export default App
