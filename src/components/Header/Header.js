import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

    const [searchText, setSearchText] = useState("");
    const goTo = (pageIndex) => {

    };

    const menu = [{
        label:"Search",
        image: () => {goTo(3)}
    }];

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#" className="brand">Todo App</a>
                </div>
                <div className="search"></div>
                <nav className="nav">
                    <ul>
                        {
                            menu.map((item, idx) =>
                                <li key={idx}>
                                    <FontAwesomeIcon icon={faUser} />
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;