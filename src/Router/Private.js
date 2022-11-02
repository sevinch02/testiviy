import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Successful from '../components/sucssecful/Successful';



const Private = () => {
    return (
     <>
      
        <Routes>
          <Route >
            <Route path='/' element={<Successful />} />
           
          </Route>
        </Routes>
    
       </>
    
    );
  };
  
  export default Private;