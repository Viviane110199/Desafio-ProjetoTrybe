import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/564x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}