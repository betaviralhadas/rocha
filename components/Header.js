//import React from 'react';
import Image from 'next/image'
import Logo from "../public/img/logo2.png";
//import "../style/components/Header.css";
import Link from 'next/link';

const Header = () => {
    return (
        <section className='header'>
            <Image
                className="logo"
                src={Logo}
                alt="restaurantRocha"
            />
            <nav>
                <ul className='navigation_header'>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/menu"}>Menu</Link></li>
                    <li>Gallery</li>
                    <li><Link href={"#contact"}>Contact</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default Header;