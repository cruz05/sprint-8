import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import StarshipDetails from '../pages/StarshipDetails'
import { Form } from '../components/Form'
import StarshipList from '../pages/StarshipList'
import Home from '../pages/Home'
import { NotFound } from '../pages/NotFound'
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
            <Route path='/register' element={<Form />}></Route>
            <Route path='/login' element={<Form />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </StarshipsContextProvider>
    </BrowserRouter>
  )
}
