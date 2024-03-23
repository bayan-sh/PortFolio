import React, { useState } from 'react';
import { useRef } from "react";
import bayan from '../../assets/images/bayan.png'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa"
export const Navbar = () => {


    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    return (
        <div className='navbar-ba'>
            <header>
                <h1> <img src={bayan} style={{height:"60px",padding:"8px"}}/></h1>
                <nav ref={navRef}>
                    <div className='menu'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <li className='navbar-item'>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/About">ABOUT ME</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/services">SERVIECES</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/Projects">PROJECTS</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to="/Contact">CERTIFICATE</Link>
                    </li>

                    <button className="nav-btn nav-close-btn " onClick={showNavbar}>
                        <FaTimes />
                    </button >
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>

            </header>
        </div>

    )
}
