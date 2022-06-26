import React from 'react';
import quotes from "../quotes.json"

const QuoteBox = ({indexNumber}) => {
    return (
        <div >
            <div className='card'>
            <i className="fa-solid fa-quote-left icon"></i>
               <p>{ quotes[indexNumber].quote}</p>
            </div>
            <div className='card-end'>
            <p>{ quotes[indexNumber].author}</p>
            </div>         
        </div>
        
    );
};

export default QuoteBox;