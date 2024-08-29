import React from 'react'

const Square = ({isDarkText,colorValue,hexValue}) => {
  return (
    <section
       className='square'
       style={{
        backgroundColor:colorValue,
        color:isDarkText ? "#000":"#fff"
       }}
    >
        <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  )
}


export default Square