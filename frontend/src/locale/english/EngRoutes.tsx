import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { FourLevers } from '../../pages/FourLevers'
import { Concecuences } from '../../pages/Concecuences'
import { NewsPage } from '../../pages/News'
import { SingleNew } from '../../pages/SingleNew'

export function EngRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home locale="en" />} />
            <Route path='/levers' element={<FourLevers locale="en" />} />
            <Route path='/consecuences' element={<Concecuences locale="en" />} />
            <Route path='/news' element={<NewsPage locale="en" />} />
            <Route path='/news/:id' element={<SingleNew locale="en" />} />
        </Routes>
    )
}
