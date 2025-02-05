// import { Contact } from 'lucide-react'
import './App.css'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import { BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
