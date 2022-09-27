import React, { useEffect, useState } from 'react'
import {CardView,InputField} from '../../Components';

function Home() {
const [card,setCard] = useState([]);

useEffect(()=>{
  fetch('http://localhost:4000')
  .then(v=>v.json())
  .then(v=>{
    setCard(v);
  })
},[card]);


  return (
    <>
      <InputField />
      {
        card.map((value,index)=><CardView key={value.id} title={value.title} desc={value.desc} img={value.image} id={value.id}/>)
      }
      
    </>
  )
}

export default Home;