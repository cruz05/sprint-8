import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import StarshipDetails from '../pages/StarshipDetails'
import StarshipList from '../pages/StarshipList'
import Home from '../pages/Home'
import { StarshipsContextProvider } from '../context/StarshipsContext'

export function Router() {
  return (
    <BrowserRouter>
      <StarshipsContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/starships'>
              <Route index element={<StarshipList />} />
              <Route path=':id' element={<StarshipDetails />} />
            </Route>
          </Route>
        </Routes>
      </StarshipsContextProvider>
    </BrowserRouter>
  )
}
