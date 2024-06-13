import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseStats from './components/BaseStats'
import './App.css'
import StepBtn from './components/StepBtn'

import CharacterSkills from './components/CharacterSkills'
import CharacterList from './components/CharacterList'

function App() {
  const [count, setCount] = useState(0)
  const symbol = '+';

  const handleClick = (ev) => {

  }

  return (
    <>

       <CharacterSkills />
       <CharacterList listName={"Skill"} />

    </>
  )
}

export default App
