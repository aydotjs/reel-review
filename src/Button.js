import React from 'react'

const Button = ({isOpen, onOpen}) => {
  return (
    <button
    className="btn-toggle"
    onClick={onOpen}
  >
    {isOpen ? "–" : "+"}
  </button>
  )
}

export default Button
