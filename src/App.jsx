import { HashRouter as Router,  Route, Routes } from 'react-router-dom'

import Home from './Pages/home/home'
import About from './Pages/about/About'
import Contact from './Pages/contact/contact'
import Gallery from './Pages/gallery/gallery'
import Plans from './Pages/Plans/Plans'
import NotFound from './Pages/notFound/notFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Stylist from './Pages/trainers/Stylist'




const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='pricing' element={<Plans/>}/>
          <Route path='stylist' element={<Stylist/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
       


    </Router>
  )
}

export default App