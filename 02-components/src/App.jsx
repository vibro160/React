import React from 'react';
import card from './components/card';
import Navbar from './components/navbar';



const App = () => {

  const user='Harsh';
  return (
    <div>
   {Navbar()}
        <div className='intro'>
          <h1>Heyy, I am Pankajj</h1>
        </div>
        
        {card()}
  
    </div>
  )
}

export default App
