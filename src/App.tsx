import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SideBar from './Components/sidebar'
import Home from './Components/Home'
import Project from './Components/project';
import Layout from './Components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
