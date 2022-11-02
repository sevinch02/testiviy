import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sucsecc from '../pages/Sucsecc';
import Login from '../components/login/Login';
import Registrition from '../components/registrition/Registrition';



const Private = () => {
    return (
     <>
        <Routes>
          <Route>
            <Route path='/sucsecc' element={<Sucsecc />} /> 
            <Route path='/sign-in' element={<Login />} /> 
            <Route path='/sign-out' element={<Registrition />} /> 
          </Route>
        </Routes>
    
       </>

    );
  };
  
  export default Private;