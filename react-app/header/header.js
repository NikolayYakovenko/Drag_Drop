import React, { PropTypes } from 'react';

export const Header = (props) => {
    const { text } = props;
    return (
        <header className="header-wrapper">
            <div className="content-wrapper">
                <div className="header-menu-wrapper">
                    <ul className="header-menu">
                        <li className="menu-item">
                            <a href="#">Кабинет</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Выход</a>
                        </li>
                    </ul>
                </div>
                <div className="header-logo">
                    <a href="/">
                        <img className="header-logo__image"
                            src="/images/zakupki_logo.png"
                            alt="logo"
                        />
                    </a>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string,
};
