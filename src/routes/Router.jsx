import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import StarshipDetails from '../pages/StarshipDetails'
import StarshipList from '../pages/StarshipList'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { StarshipsContextProvider } from '../context/StarshipsContext'
import UserContextProvider from '../context/UserContext'
import { ProtectedRoute } from './ProtectedRoute'
import Login from '../pages/Login'
import { Register } from '../pages/Register'

export function Router() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <StarshipsContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/starships' element={<ProtectedRoute />}>
                <Route index element={<StarshipList />} />
                <Route path=':id' element={<StarshipDetails />} />
              </Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Route>
          </Routes>
        </StarshipsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}
