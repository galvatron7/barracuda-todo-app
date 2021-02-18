import React from "react";

const Header = (props) => {

    const goTo = (pageIndex) => {

    };

    const menu = [{
        label:"Calendar",
        action: () => {goTo(1)}
    }, {
        label:"Form",
        action: () => {goTo(2)}
    }, {
        label:"Search",
        action: () => {goTo(3)}
    }];

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="#" className="brand">Todo App</a>
                </div>
                <div className="search">
                    <input type="input" className="search-npt" placeholder="Search for todo item..."/>
                    <div className="search-btn">
                        <span href="#">Search</span>
                    </div>
                </div>
                <nav className="nav">
                    <ul>
                        {
                            menu.map((item, idx) =>
                                <li key={idx}><a onClick={() => item.action()} href="#">{item.label}</a></li>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;