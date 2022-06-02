import Link from 'next/link'

interface HeaderProps {
  styling: string
}

const Header = ({ styling }: HeaderProps) => (
  <ul className={styling}>
    <li>
      <Link href="/">
        <h1>Harrison Tate</h1>
      </Link>
    </li>
    <li className="Photos">
      <Link href="/Photos">
        <a>Photos</a>
      </Link>
    </li>
    <li className="Lookbook">
      <Link href="/flare">
        <a>Flare</a>
      </Link>
    </li>
  </ul>
)

export default Header
