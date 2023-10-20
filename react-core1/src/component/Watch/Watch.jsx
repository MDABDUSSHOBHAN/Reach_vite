import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';


const Watch = () => {

 const [steps,setSteps]= useState(1)
 const intrement=()=>{
    
    const nextSteps= steps+1;
    setSteps(nextSteps);
     
 }
 useEffect(()=>{
    console.log(steps) 
 },[steps])




    return (
        <div className='container1'>
            <h3>This is my smart Watch</h3>
             <p>Steps: {steps}</p>
            <button onClick={intrement}>Update Value</button>
            <Dial steps={steps}></Dial>
        
        </div>
    );
};

export default Watch;