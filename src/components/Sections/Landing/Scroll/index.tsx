import React from 'react'
import './scroll.css'

const Scroll = () => (
  <div className="scroll-overlay">
    <div className="mouse-container">
      <div className="mouse" />
    </div>
    <p className="vertical-text">scroll</p>
    <div className="scrollBox"></div>
  </div>
)

export default Scroll
