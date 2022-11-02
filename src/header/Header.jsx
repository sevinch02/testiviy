
import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Link className='link' to='/sign-in'> <button>Kirish</button>
            </Link>
            <Link className='link' to='/sign-out'>  <button>Ro'yxatdan o'tish</button>
            </Link>
        </>
    );
};

export default Header;