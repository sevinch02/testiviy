import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sucsecc from '../pages/Sucsecc';



const Private = () => {
    return (
     <>
        <Routes>
          <Route>
            <Route path='/sucsecc' element={<Sucsecc />} />    
          </Route>
        </Routes>
    
       </>

    );
  };
  
  export default Private;