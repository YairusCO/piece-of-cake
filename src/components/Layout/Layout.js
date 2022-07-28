import React from 'react'
import Footer from '../Footer'

const Layout = (props) => {
  const { children } = props
  return (
    <div className='Layout'>
      <div className='Wrapper'>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
