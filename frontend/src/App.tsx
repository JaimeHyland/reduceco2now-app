
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import { Footer } from './components/Footer'
import { EngRoutes } from './locale/english/EngRoutes'
import { SpaRoutes } from './locale/spanish/SpaRoutes'
import type { ComponentProp } from './services/util'


function App() {
  const location = useLocation();
  const locale:ComponentProp = location.pathname.split("/")[1] ;
  
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to="/en" replace />} />
        <Route path='/en/*' element={<EngRoutes />} />
        <Route path='/es/*' element={<SpaRoutes />} />
      </Routes>
      <Footer locale={locale} />
    </main>
  )
}

export default App
