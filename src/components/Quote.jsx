import React from 'react'
import Button from './Button'

const Quote = ({quoteRandom, colorRandom, clickButton}) => {

  const styleButton = {
    backgroundColor: colorRandom
  }
  
  return (
    <article className='Quote'>
      <p>{quoteRandom.quote}</p>
      <b>"{quoteRandom.author}"</b>
      <Button 
      styleButton={styleButton}
      clickButton={clickButton}
      />
    </article>
    
  )
}

export default Quote