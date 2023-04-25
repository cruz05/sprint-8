import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const styles = {
  link: 'border-b text-sm hover:text-gray-300',
  hover: 'p-2.5 hover:border rounded-full'
}

export default function Footer() {
  return (
    <footer className='text-center py-3'>
      <p>More from Star Wars</p>
      <div className='flex justify-center items-center gap-4 h-12'>
        <Link
          className={styles.hover}
          to='https://www.facebook.com/starwars.es/'
          target='_blank'>
          <FaFacebookF />
        </Link>
        <Link
          className={styles.hover}
          href='https://twitter.com/starwars'
          target='_blank'>
          <FaTwitter />
        </Link>
        <Link
          className={styles.hover}
          href='https://www.instagram.com/starwars/'
          target='_blank'>
          <FaInstagram />
        </Link>
      </div>
      <p className='text-sm'>TM & &copy; Lucasfilm Ltd. All Rights Reserved</p>
      <div className='flex justify-center gap-x-3 gap-y-2 flex-wrap'>
        <Link className={styles.link}>Terms of use</Link>
        <Link className={styles.link}>Additional Information</Link>
        <Link className={styles.link}>Privacy Policy</Link>
        <Link className={styles.link}>Star Wars at shopDisney</Link>
      </div>
    </footer>
  )
}
