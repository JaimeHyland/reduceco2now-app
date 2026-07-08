
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { FourLevers } from './pages/FourLevers'
import { Concecuences } from './pages/Concecuences'
import { NewsPage } from './pages/News'
import { SingleNew } from './pages/SingleNew'

function App() {
  

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/levers' element={<FourLevers />} />
        <Route path='/consecuences' element={<Concecuences />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/news/:id' element={<SingleNew />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
