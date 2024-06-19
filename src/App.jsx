import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './pages/Index.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Signup from './pages/Signup.jsx'
import Faq from './pages/Faq.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/loggedIn/Dashboard.jsx'
import AddAudio from './pages/loggedIn/AddAudio.jsx'
import InspectAudio from './pages/loggedIn/InspectAudio.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/dashboard" element={<Dashboard />} />
          <Route path="/auth/addAudio" element={<AddAudio />} />
          <Route path="/auth/audio/:id" element={<InspectAudio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
