import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Component/User/User';

//--conditional Formatting
function App() {
  const [familiar,setFamiliar]=useState(false);
    
  return (
    <div className="App">
      <h1>Is Familiar? - {familiar.toString()}</h1>
      <button onClick={()=>setFamiliar(!familiar)}>Toggle Friend</button>
      <User isfamiliar={familiar}></User>
    </div>
  );
}

export default App;
