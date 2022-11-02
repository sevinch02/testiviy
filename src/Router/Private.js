import React from 'react';
import { Route, Routes , Link } from 'react-router-dom';
import Header from '../header/Header';
import Sucsecc from '../pages/Sucsecc';
import Login from '../components/login/Login';



const Private = () => {
    return (
     <>
        <Routes>
    
            <Link to="/login">login</Link>
      
        </Routes>
    
       </>

    );
  };
  
  export default Private;