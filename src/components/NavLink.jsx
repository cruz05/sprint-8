export function NavLink({ href, children }) {
  return (
    <a
      className='hover:text-white cursor-pointer'
      href={href}>
      {children}
    </a>
  )
}
