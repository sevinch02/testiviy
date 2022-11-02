
import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 

const Header = () => {
    const navigate = useNavigate();
    const API = 'https://top-link-app.herokuapp.com/api/'
    return (
        <>
          
            <button onClick={() => navigate(`${API}/auth/login`)}>Kirish</button>
          
            <Link className='link' to='/sign-out'>  <button>Ro'yxatdan o'tish</button>
            </Link>
        </>
    );
};

export default Header;