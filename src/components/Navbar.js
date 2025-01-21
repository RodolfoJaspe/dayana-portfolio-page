import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';


function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className='navbar'>
        <div className={click ? "nav-menu active" : "nav-menu"}>
            {/* <div>
                <Link to='home' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-300} duration={500}>Home</Link>
            </div> */}
            <div>
                <Link to='about' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-300} duration={500}>ABOUT</Link>
            </div>
            <div>
                <Link to='gallery' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>GALLERY</Link>
            </div>
            <div>
                <Link to='videos' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-100} duration={500}>REELS</Link>
            </div>
            <div>
                <Link to='contact' className='nav-item' onClick={closeMenu} spy={true} smooth={true} offset={-500} duration={500}>CONTACT</Link>
            </div>
        </div>
        <div className='email'>
            <p>dayanamorales.actress@gmail.com</p>
        </div>    
    </div>
  )
}

export default Navbar