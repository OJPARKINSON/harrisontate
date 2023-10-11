import Link from 'next/link'

interface HeaderProps {
  styling: string
}

const Header = ({ styling }: HeaderProps) => (
  <ul className={styling}>
    <li>
      <Link href="/">Harrison Tate</Link>
    </li>
    <li className="Photos">
      <Link href="/Photos">Photos</Link>
    </li>
    <li className="Lookbook">
      <Link href="/flare">Flare</Link>
    </li>
  </ul>
)

export default Header
