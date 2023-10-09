import React, { useEffect, useRef } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const elementRef = React.useRef<HTMLInputElement>(null);
  const escFunction = (e:any) =>{
    const robotDiv = elementRef.current;//document.getElementById('robot');
    if (e.key === "w") {
      if(robotDiv && robotDiv.getBoundingClientRect().left >= 58)
      //console.log(robotDiv.getBoundingClientRect().left)
        robotDiv.style.left = (robotDiv.getBoundingClientRect().left - 54) + "px";
    } else if (e.key === "e") {
      if(robotDiv && robotDiv.getBoundingClientRect().left <= 482)
      robotDiv.style.left = (robotDiv.getBoundingClientRect().left + 54) + "px";
    } else if (e.key === "n") {
      if(robotDiv && robotDiv.getBoundingClientRect().top >= 58)
      robotDiv.style.top = (robotDiv.getBoundingClientRect().top - 54) + "px";
    } else if (e.key === "s") {
      if(robotDiv && robotDiv.getBoundingClientRect().top <= 482)
      robotDiv.style.top = (robotDiv.getBoundingClientRect().top + 54) + "px";
    }
  }

  useEffect(()=>{
    //const divElement = elementRef.current;
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  },[]);

  return (
    <div className="App">
        <div id="robot" className='imageContainer' ref={elementRef}>
          <img src={logo} alt=""/>
        </div>
        {Array.from(Array(10), (e, r) => 
          <>
            {Array.from(Array(10), (e, c) => 
              <div key={r.toString() + "-" + c.toString()} id={r.toString() + "-" + c.toString()} className="tile"></div>
            )}
          </>
        )}
      
    </div>
  );
}

export default App;
