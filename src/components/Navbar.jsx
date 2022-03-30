import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className='main-navbar'>
            {/* Navbar Logo start */}
            <div className='logo-bar'>
                <h1>
                    <span>S</span>abera
                    <span>P</span>apri
                </h1>
            </div>
            {/* Navbar Logo End */}

            {/* Navbar Menu start */}
            <div className='menu-link'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Service</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            {/* Navbar Menu End */}

            {/* Navbar Social Icon */}
            <div className='social-media'>
                <ul className='social-media-bar'>
                    <li><a href='https://www.facebook.com/SaberaHawlader'><FaFacebookSquare/></a></li>
                    <li><a href='https://www.instagram.com/sabera_papri/'><FaInstagramSquare/></a></li>
                    <li><a href='https://github.com/SaberaAkterPapri'><FaGithubSquare/></a></li>
                </ul>
            </div>
            {/* Navbar Social Icon */}
        </nav>
        {/* Section Start*/}
        {/* Section End*/}
    </React.Fragment>
  )
}

export default Navbar;