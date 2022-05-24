import * as React from 'react'

import { SEO, Header } from '.'
import '../ui/layout.css'
import '../ui/Header.css'

interface LayoutProps {
  title?: string
  styling?: string
  whiteFooter?: boolean
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  title,
  styling,
  children,
  whiteFooter,
}) => {
  return (
    <div className="container">
      <SEO
        title={title || ''}
        keywords={[`Harrison Tate`, `Portfolio`, `Photography`]}
      />
      <Header styling={styling || ''} />
      {children}
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
