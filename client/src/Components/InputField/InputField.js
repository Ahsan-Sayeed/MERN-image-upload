import React, { useState } from 'react';
import './InputField.css';
import axios from 'axios';

function InputField() {
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [file,setFile] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();

    axios.post('http://localhost:4000/post',{
    title:title,
    desc:desc,
    image:file
    },
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      }
    })

  }

  return (
    <header>
      <div>
        <h2>Choose a file and insert heading and description</h2>
        <form action='/post' encType='multipart/form-data' onSubmit={handleSubmit}>
            <input type='text' name='header' id='header' placeholder='Title..' onChange={e=>setTitle(e.target.value)}/><br/>
            <input type="text" name="desc" id="desc" placeholder='descriptions..' onChange={e=>setDesc(e.target.value)} /><br />
            <input type="file" name="image" id='images' onChange={e=>setFile(e.target.files[0])}/><br />
            <button type='submit'>Add</button>
        </form>
      </div>
    </header>
  )
}

export default InputField;