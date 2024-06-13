import { useState } from 'react'
import BaseStats from './components/BaseStats'
import './App.css'

import CharacterList from './components/CharacterList'

function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>
    <div className='flex flex-row flex-wrap w-screen justify-between items-center px-20 bg-purple-600'>
      <BaseStats name={"Chadness"} val={5} progress={"▀"} />
      <CharacterList listName={"Skill"} />
      </div>

    </>
  )
}

export default App
