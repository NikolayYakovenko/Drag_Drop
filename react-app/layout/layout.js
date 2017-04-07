import React from 'react';

import { Header } from 'header';
import { Footer } from 'footer';

import Container from 'box/container';

export const Layout = () => {
    return (
        <div>
            <Header text='asssdasdasd' />
            <div className="content-wrapper">
                <div className="right-sidebar">
                </div>
                <div className="left-sidebar">
                    <button className="button">+ Add</button>
                    <ul className="left-menu">
                        <li className="left-menu__item">Item 1</li>
                        <li className="left-menu__item">Item 2</li>
                        <li className="left-menu__item">Item 3</li>
                        <li className="left-menu__item">Item 4</li>
                        <li className="left-menu__item">Item 5</li>
                    </ul>
                </div>
                <div className="main-content">
                    <Container />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut, dolor debitis cum atque tenetur numquam nisi sapiente ipsum quo perferendis reprehenderit eaque iusto eius excepturi. Modi enim at esse.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, est iusto ipsum architecto magni temporibus aliquid veniam a fuga harum, facilis delectus nisi quaerat unde, nesciunt, provident inventore! Officia, quae.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut, dolor debitis cum atque tenetur numquam nisi sapiente ipsum quo perferendis reprehenderit eaque iusto eius excepturi. Modi enim at esse.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, est iusto ipsum architecto magni temporibus aliquid veniam a fuga harum, facilis delectus nisi quaerat unde, nesciunt, provident inventore! Officia, quae.
                </div>
            </div>
            <Footer />
        </div>
    )
}
