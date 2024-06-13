import { useState } from 'react'
import BaseStats from './components/BaseStats'
import './App.css'

import CharacterList from './components/CharacterList'
import TextAreaComponent from './components/TextAreaComponent'
function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>
    <div className='flex flex-row flex-wrap w-screen justify-between items-center px-20 bg-purple-900'>
      {/*<BaseStats name={"Chadness"} val={5} progress={"▀"} /> */}
      <CharacterList listName={"Stat"} />
      <TextAreaComponent />
      <CharacterList listName={"Skill"} />
      </div>

    </>
  )
}

export default App
