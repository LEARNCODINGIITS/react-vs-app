import { useState,useEffect } from 'react';
import { welcome } from '../services/WelcomeService';

function Welcome() {
const[message1,setMessage1]=useState([]);

useEffect(
    ()=>{
        welcome().then((response)=>{
            console.log(response.data)
            setMessage1(response.data)
        }).catch((error)=>console.log(error));
    }
    ,[]);


  return (
    <div>{message1}</div>
  )
}

export default Welcome