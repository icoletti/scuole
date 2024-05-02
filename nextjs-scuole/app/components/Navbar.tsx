import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/schools">
            <a>Schools</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar