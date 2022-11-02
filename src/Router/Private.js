import React from 'react';
import { Route, Routes , Link } from 'react-router-dom';
import Header from '../header/Header';
import Sucsecc from '../pages/Sucsecc';
import Login from '../components/login/Login';



const Private = () => {
    return (
     <>
        <Routes>
    
            <Link to="/sign-in">login</Link>
            <Link  to="/sign-out">Royhatdan otish </Link>
      
        </Routes>
    
       </>

    );
  };
  
  export default Private;