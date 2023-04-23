import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../components/Form'
import { UserContext } from '../context/UserContext'
import logo from '../assets/logo.webp'

export function Register() {
  const { credentials, setCredentials } = useContext(UserContext)

  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const newAccount = { email, password }

    setCredentials([...credentials, newAccount])
    console.log(credentials)
  }

  return (
    <div className='p-5 max-w-[390px] text-yellow-400 bg-[#222225] text-center'>
      <img src={logo} alt='' className='w-[10rem] mx-auto' />
      <h2 className='text-2xl pt-4'>CREATE YOUR ACCOUNT</h2>
      <Form handleSubmit={handleSubmit} text='Create account' />
      <p>
        ¿Have an account?
        <Link to='/login'> Log in</Link>
      </p>
    </div>
  )
}
