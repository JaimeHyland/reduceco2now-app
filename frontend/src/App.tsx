
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { Footer } from './components/Footer'
import { EngRoutes } from './locale/english/EngRoutes'
import { SpaRoutes } from './locale/spanish/SpaRoutes'


function App() {
  

  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to="/en" replace />} />
        <Route path='/en/*' element={<EngRoutes />} />
        <Route path='/es/*' element={<SpaRoutes />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
