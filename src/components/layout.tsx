import * as React from 'react'

import { SEO, Header } from '../components'

interface LayoutProps {
  title?: string
  styling?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, styling, children }) => {
  return (
    <>
      <SEO title={title || ''} />
      <Header styling={styling || ''} />
      {children}
    </>
  )
}

export default Layout
