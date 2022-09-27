import React from 'react';
import {Route,Router, Routes} from 'react-router-dom';
import {Home} from '../Pages';

function index() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default index;