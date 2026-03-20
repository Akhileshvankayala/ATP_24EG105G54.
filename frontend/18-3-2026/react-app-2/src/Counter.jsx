import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);//state and function to modify teh state
    const increment=()=>{
        setCount(count+1)
    };
    const decrement=()=>{
        setCount(count-1)
    }
    return(
        <div>
        <h1>count:{count}</h1>
        <button className="px-2 py-2 bg-cyan-400" onClick={increment}>+</button>
        <button className="px-2 py-2 bg-cyan-400" onClick={decrement}>-</button>
        </div>
    )
}