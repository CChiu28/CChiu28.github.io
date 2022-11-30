import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './Components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBar />
      test
    </div>
  )
}

export default App
