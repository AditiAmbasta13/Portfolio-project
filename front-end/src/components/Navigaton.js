import React from 'react'
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Contact from "./Contact";
import MenuIcon from '@mui/icons-material/Menu';


const Navigaton = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
    return(
        <div className={scrolled ? "nav-container scrolled" : "nav-container"}>
            <a className='nav-logo' href="#">&lt;aditiambasta&gt;</a>
            <ul className='nav-items'>
                <li className='nav-ele'><a href="#home" className={activeLink === 'home' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
                <li className='nav-ele'><a href="#skills" className={activeLink === 'skills' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('skills')}>Skills</a></li>
                <li className='nav-ele'><a href="#projects" className={activeLink === 'projects' ? 'active nav-ele' : 'nav-ele'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                <li className='social-icon'>
                    <a href="https://github.com/AditiAmbasta13">
                        <GitHubIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid rgba(255, 255, 255, 0.5)", padding:"5px", borderRadius:"50%"}}/>
                    </a>
                </li>
                <li className='social-icon'>
                    <a href="https://www.linkedin.com/in/aditi-ambasta-9581b4288/" target="_blank">
                        <LinkedInIcon className='nav-icon' sx={{fontSize:"42px", border:"1px solid rgba(255, 255, 255, 0.5)", padding:"5px", borderRadius:"50%"}}/>
                    </a>
                </li>
                <a className='nav-items-button' href='#connect'><span>Connect</span></a>
            </ul>
        </div>
    )
}

export default Navigaton
