import React, {useState} from 'react';
import './App.css';
import {yes, no} from './objects';


function App() {
  const [toggle, setToggle] = useState(false)
  return  ( 
    <>
    {toggle ? <h1>{yes["yes-statement"]}</h1> : <h1> {no["no-statement"]}</h1> }
    <img alt="no" onClick ={() => setToggle(!toggle)} src={toggle ? yes["yes-image"] : no['no-image']} />
    </>
    )
}

export default App;
