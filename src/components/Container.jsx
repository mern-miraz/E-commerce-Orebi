import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`abc mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container