import React from 'react';
import './CardView.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function CardView({title,desc,img,id}) {

  const handleclick = (e) =>{
    fetch('http://localhost:4000', {
      method: 'DELETE',
      body: JSON.stringify({
      id:e
      }),
      headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
  })
}
  
  return (
    <>
      <div className='card' style={{backgroundImage:`url(${img})`}}>
            <h3 className='card-title'>{title}</h3>
         <div className='desc-box'>
             <span className='card-desc'>{desc}</span>
             <div className='hover-logos'>
              <span><OpenInNewIcon fontSize='10px' /></span>
              <span><ModeEditIcon fontSize='10px'/></span>
              <span onClick={(e)=>handleclick(id)}><DeleteIcon fontSize='10px'/></span>
            </div>
        </div>
      </div>
    </>

  )
}

export default CardView;