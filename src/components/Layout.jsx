import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Header } from './Header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='container mx-auto flex-grow grid items-center'>
        <section className='max-w-[700px] mx-auto'>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}
