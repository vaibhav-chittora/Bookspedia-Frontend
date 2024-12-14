import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Courses from './courses/Courses'
import ContactUs from './Contact/ContactUs'
import AboutUs from './About us/AboutUs'
import SignUpForm from './components/SignUp'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Courses /> : <SignUpForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
