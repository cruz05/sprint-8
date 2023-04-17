import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Header } from './Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='container mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
