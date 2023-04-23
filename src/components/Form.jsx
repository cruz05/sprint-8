import { useState } from 'react'

const inputStyles =
  'w-full px-3 py-1 text-black focus:bg-zinc-800 focus:text-yellow-400 rounded-sm focus:outline-yellow-400 my-1'

export function Form({ handleSubmit, text, error }) {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = e => {
    setShowPassword(e.target.checked)
  }

  return (
    <form onSubmit={handleSubmit} className='py-2 text-left'>
      <label>
        Email
        <input
          type='email'
          name='email'
          placeholder='E.g. johndoe@gmail.com'
          className={inputStyles}
          required
        />
      </label>
      <label>
        Password
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          placeholder='Password'
          className={inputStyles}
          required
        />
      </label>
      <label>
        <input
          type='checkbox'
          onChange={handleChange}
          name='show'
          className='mb-3'
        />
        Show password
      </label>
      {error && <p className='text-red-600'>Datos incorrectos</p>}
      <button
        type='submit'
        className='bg-neutral-700 text-white w-full py-1.5 hover:bg-blue-900'>
        {text}
      </button>
    </form>
  )
}
