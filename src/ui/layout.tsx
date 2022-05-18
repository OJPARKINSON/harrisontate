import * as React from 'react'

import { SEO, Header } from '.'
import '../ui/layout.css'
import '../ui/Header.css'

interface LayoutProps {
  title?: string
  styling?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, styling, children }) => {
  return (
    <div className="container">
      <SEO
        title={title || ''}
        keywords={[`Harrison Tate`, `Portfolio`, `Photography`]}
      />
      <Header styling={styling || ''} />
      {children}
    </div>
  )
}

export default Layout
