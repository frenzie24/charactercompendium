import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BaseStats from './components/BaseStats'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BaseStats />

    </>
  )
}

export default App
