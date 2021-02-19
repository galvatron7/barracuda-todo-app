import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#" className="brand">Todo App</a>
                </div>
                <div className="search"></div>
                <nav className="nav">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;