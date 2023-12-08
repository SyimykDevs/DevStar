
import './App.css'
import './index.css'
import Comands from './pages/Comands'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Routes>
        <Route path='/'  element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/Comands' element={<Comands />}/>
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} />
        </Route>
    </Routes>
     
    </>
  )
}

export default App
