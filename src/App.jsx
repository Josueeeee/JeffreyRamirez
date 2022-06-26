import './App.css';
import QuoteBox from './component/QuoteBox';
import ToggleButton from './component/ToggleButton';
import quotes from "./quotes.json"
import { useState } from "react";

function App() {

  const color=[ "#845EC2", "#D65DB1", "#FF6F91", "#FF9671" , "#FFC75F", "#FF78AE" ]
  const numberRamdom = Math.floor(Math.random()* quotes.length);
  const colorRamdom = Math.floor(Math.random()* color.length);
  const indexcolor= color[colorRamdom];
  
  const [indexNumber , setIndexNumber] = useState(numberRamdom)

  const toggleindex =() => {
    const numberRamdom = Math.floor(Math.random()* quotes.length);
    setIndexNumber(numberRamdom) 
  }

  document.body.style = `background: ${indexcolor}`
  return (
    <div className='container' >
      <div  className='containerbody' style={{color: indexcolor}}>
        <QuoteBox indexNumber = {indexNumber} />
        < ToggleButton toggleindex = {toggleindex} indexcolor= {indexcolor} />
      </div>
      
    
    </div>
  )
}

export default App
