import logo from '../../assets/logo.png';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }
    return (
        <>
        <nav id="navbar" className="w-full lg:max-w-screen-lg ext-white flex items-center sm:justify-evenly lg:justify-between py-2 px-8 md:px-4 ">
            <div className="logo flex items-center">
                <a href="#hero">
                    <img src={logo} alt="Logo" className="w-auto max-h-12 sm:max-h-12 lg:max-h-16 lg:w-full"/>
                </a>
            </div>
            <div className='nav-menu hidden md:flex'>
                <ul className="flex gap-1 md:text-md lg:text-lg font-bold">
                    <li><a href="#hero" className="text-white hover:bg-darkBlue py-1.5 px-3 rounded">Home</a></li>
                    <li><a href="#classes" className="text-white hover:bg-darkBlue py-1.5 px-3 rounded">Classes</a></li>
                    <li><a href="#trainer" className="text-white hover:bg-darkBlue py-1.5 px-3 rounded">Trainer</a></li>
                    <li><a href="#review" className="text-white hover:bg-darkBlue py-1.5 px-3 rounded">Review</a></li>
                    <li><a href="#contact" className="text-white hover:bg-darkBlue py-1.5 px-3 rounded">Contact</a></li>
                    <li><a href="#" className="text-white bg-orange py-1.5 px-3 rounded hover:bg-darkBlue">JOIN US</a></li>
                </ul>
            </div>
            <div className="nav-menu-icon sm:flex md:hidden ml-auto text-white">
            <button id="nav-button"
            onClick={toggleMenu}>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </nav>
        <BurgerMenu isOpen={isOpen} />
        </>
    )
}

export default Navbar;