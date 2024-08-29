import React from 'react'


const Input1 = ({colorValue,setColorValue,setIsDarkText,isDarkText,setHexValue}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
    <label>Add Color Name</label>
    <input
    autoFocus
    type='text'
    placeholder='Add Color Name'
    required
    value={colorValue}
    onChange={(e)=>{
        setColorValue(e.target.value);
        setHexValue(e.target.value);
    }}
    />
    <button
        type='button'
        onClick={()=>setIsDarkText(!isDarkText)}
    >Toggle Text Color</button>
  
 </form>
  )
}

export default Input1