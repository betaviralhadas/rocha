import React from 'react';
import Logo from "../img/logo.jpg";

const Header = () => {
    return (
        <section>
            <img
                className=""
                src={Logo}
                alt="restauranteRocha"
            />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;