//import React from 'react';
import Image from 'next/image'
import Logo from "../public/img/logo.jpg";
//import "../style/components/Header.css";
import Link from 'next/link';

const Header = () => {
    return (
        <section className='header'>
            <Image
                className=""
                src={Logo}
                alt="restauranteRocha"
            />
            <nav>
                <ul className='navigation_header'>
                    <li>Home</li>
                    <li><Link href={"/menu"}>Menu</Link></li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;