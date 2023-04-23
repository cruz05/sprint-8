import { useContext, useState } from 'react'
import { Form } from '../components/Form'
import { UserContext } from '../context/UserContext'
import logo from '../assets/logo.webp'
import { Link, Navigate } from 'react-router-dom'

export default function Login() {
  const { credentials, isLogged, setIsLogged } = useContext(UserContext)
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const account = credentials.find(
      account => account.email === email && account.password === password
    )

    if (account) {
      sessionStorage.setItem('token', email)
      setIsLogged(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className='p-5 max-w-[390px] text-yellow-400 bg-[#222225] text-center'>
      <img src={logo} alt='' className='w-[10rem] mx-auto' />
      <h2 className='text-2xl pt-3'>LOGIN</h2>
      <Form handleSubmit={handleSubmit} text='Sign in' error={error} />
      <p>
        ¿Don&apos;t have an account? <Link to='/register'>Sign up</Link>
      </p>
      {isLogged && <Navigate to='/' />}
    </div>
  )
}
