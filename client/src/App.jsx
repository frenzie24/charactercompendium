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
      <BaseStats />
         <CharacterList listName={"Skill"} />

    </>
  )
}

export default App
