import React from 'react'
import "../css/loader.css"

const Loader = () => {
  return (
    <div data-testid="loader" className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
  )
}

export default Loader