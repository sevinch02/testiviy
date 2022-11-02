
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
          <Link to={"/login"} >  <button>Kirish</button> </Link>
            <button>Ro'yxatdan o'tish</button>
        </>
    );
};

export default Header;