import React, { useState } from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import BackgroundImage from './BackgroundImage';
import './Navbar.css';



const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
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
            <div className= {showMediaIcons ? 'menu-link mobile-menu-link': 'menu-link'}>
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
                    <li><a href='https://www.facebook.com/SaberaHawlader'><FaFacebookSquare className='facebook' /></a></li>
                    <li><a href='https://www.instagram.com/sabera_papri/'><FaInstagramSquare className='instagram'/></a></li>
                    <li><a href='https://github.com/SaberaAkterPapri'><FaGithubSquare className='github' /></a></li>
                </ul>
                {/* hamburger menu start*/}
                    <div className='hamburger-menu'>
                        <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                {/* hamburger menu start*/}
            </div>
            {/* Navbar Social Icon */}
        </nav>
        {/* Body Section Start*/}
        {/* <div className='middle-section'>
            <p>Hello!</p>
            <h1>Sabera Akter Papri</h1>
        </div> */}
        {/* Section End*/}

        {/* Background Image Start */}
        <div className='backgroundImage'>
            <BackgroundImage />
        </div>
        {/* Background Image end*/}
    </React.Fragment>
  )
}

export default Navbar;