import { useState } from 'react';
import './index.css';
import Square from './Square';
import Input from './Input1';


function App(){

const [colorValue,setColorValue]=useState('')
const[hexValue,setHexValue]=useState('')
const[isDarkText,setIsDarkText]=useState(true)

  return (
       <div className='App'>
         <Square
              colorValue={colorValue}
              hexValue={hexValue}
              isDarkText={isDarkText}
              
         />
         <Input
            colorValue={colorValue}
            setColorValue={setColorValue}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
         />
       </div>
  )
}

export default App