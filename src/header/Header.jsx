
import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <button>
                <Link to={"/sign-up"} >Kirish </Link>
            </button>
            <button>
                <Link to={"/sign-out"} >Ro'yhatdan o'tish </Link>
            </button>
            
        </div>

    );
};

export default Header;