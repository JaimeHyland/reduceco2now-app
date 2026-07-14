import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { FourLevers } from '../../pages/FourLevers'
import { Concecuences } from '../../pages/Concecuences'
import { NewsPage } from '../../pages/News'
import { SingleNew } from '../../pages/SingleNew'

export function SpaRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home locale="es" />} />
            <Route path='/levers' element={<FourLevers locale="es" />} />
            <Route path='/consecuences' element={<Concecuences locale="es" />} />
            <Route path='/news' element={<NewsPage locale="es" />} />
            <Route path='/news/:id' element={<SingleNew locale="es" />} />
        </Routes>
    )
}