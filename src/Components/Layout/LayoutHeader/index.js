import React from 'react'
import Header from '../Components/Header'

function LayoutHeader({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default LayoutHeader
