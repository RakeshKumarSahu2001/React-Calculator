import React from 'react'

function Button({btn,onBtnClick}) {
  return (
    <>
        <button onClick={onBtnClick} className='btn btn-primary btn-style'>{btn}</button>
    </>
  )
}

export default Button