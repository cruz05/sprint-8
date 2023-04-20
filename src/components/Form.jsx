import { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const styles = {
  section: 'px-5 py-3 max-w-[390px] text-yellow-400 bg-zinc-900 text-center',
  input:
    'w-full px-3 py-1 text-black focus:bg-zinc-800 focus:text-yellow-400 rounded-sm focus:outline-yellow-400 my-1',
  button: 'bg-neutral-700 text-white w-full py-1.5 hover:bg-blue-900'
}

export const Form = memo(function Form() {
  const { pathname } = useLocation()
  const [userAccount, setUserAccount] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(userAccount)
  }

  const handleCheck = e => {
    setShowPassword(e.target.checked)
  }

  return (
    <div className={styles.section}>
      <h2 className='text-xl font-bold'>
        {pathname.includes('login') ? 'Login' : 'Register'}
      </h2>
      <form onSubmit={handleSubmit} className='py-2 text-left'>
        <label>
          Email
          <input
            type='email'
            name='email'
            placeholder='E.g. johndoe@gmail.com'
            className={styles.input}
            onChange={e =>
              setUserAccount(prev => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </label>
        <label>
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Password'
            className={styles.input}
            onChange={e =>
              setUserAccount(prev => ({ ...prev, password: e.target.value }))
            }
            required
          />
        </label>
        <label>
          <input
            type='checkbox'
            onChange={handleCheck}
            name='show'
            className='mb-3'
          />
          Show password
        </label>
        <button type='submit' className={styles.button}>
          {pathname.includes('login') ? 'Sign in' : 'Create Account'}
        </button>
      </form>
    </div>
  )
})
