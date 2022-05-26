import React from 'react'

function Counter() {
    const [counter,setCounter]=React.useState(0);
    const handleInc=(value)=>{
        setCounter(counter+value);
    };
    const Double=(value)=>{
        setCounter(counter*value);
    };

  return (
    <>
    <h1 style={{color:counter%2===0?"green":"red"}}>{counter}</h1>
    <button onClick={()=>handleInc(-1)}>DEC</button>
    <button onClick={()=>handleInc(1)}>INC</button>
    <button onClick={()=>Double(2)}>DOUBLE</button>
    </>
  )
}

export default Counter