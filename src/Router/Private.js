import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Sucsecc from '../pages/Sucsecc';
import Login from '../components/login/Login';



const Private = () => {
    return (
     <>
        <Routes>
          <Route>
            <Route path='/' element={<Sucsecc />} />   
            <Route path='/login' element={< Login/>} /> 
          </Route>
        </Routes>
    
       </>

    );
  };
  
  export default Private;