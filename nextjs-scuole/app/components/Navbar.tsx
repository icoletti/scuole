import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={`schools`}>Schools</Link>
        </li>
        <li>
          <Link href="/schools">Schools</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar