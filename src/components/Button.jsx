import React from 'react'

const Button = ({styleButton, clickButton}) => {
  return (
    <button 
    style={styleButton} 
    onClick={clickButton}>
    <i className='fas fa-angle-right'></i>
    </button>
  )
}

export default Button