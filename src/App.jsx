import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './components/Courses'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />

      </Routes>
    </>
  )
}

export default App
