import React from 'react'

const Button = ({btn_name, onClick}) => {
  return (
    <button 
      className="bg-primary-color text-white px-6 py-3 rounded hover:bg-primary-hover transition-colors font-inter text-body-text"
      onClick={onClick}
    >
      {btn_name}
    </button>
  )
}

export default Button