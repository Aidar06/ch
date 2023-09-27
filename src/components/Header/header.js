import React from 'react';
import {Link} from "react-router-dom";
import {TbArrowBackUp} from "react-icons/tb";

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <h1>LifeCheck</h1>
                    <div className='header--set'>
                        <Link style={{color: 'white'}} to={'/'}><TbArrowBackUp/></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;