import React from 'react'

function Cell({filled,onClick,isDessabled}) {
  return (
    <button type='button'
    disabled={isDessabled}
    onClick={onClick}
    className={filled?"cell cell-activated":"cell"}/>

  )
}

export default Cell