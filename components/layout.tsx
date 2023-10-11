import Head from 'next/head'

import { Header } from '@/components'

interface LayoutProps {
  title?: string
  styling?: string
  whiteFooter?: boolean
  children: React.ReactNode
}

const Layout = ({ title, styling, children, whiteFooter }: LayoutProps) => {
  const displayTitle = `Harrison Tate | ${title}`
  return (
    <div className="container">
      <Head>
        <title>{displayTitle}</title>
      </Head>
      <Header styling={styling || ''} />
      <main>{children}</main>
      <footer style={{ color: whiteFooter ? 'white' : 'black' }}>
        <h3>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="http://oliverparkinson.co.uk">Oliver Parkinson</a>
        </h3>
      </footer>
    </div>
  )
}

export default Layout
