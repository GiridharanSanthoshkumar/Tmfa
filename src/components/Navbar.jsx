// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import TMFALogo from '../assets/Books/Images_other_than_gall/TMFA Logo.png';
import "./Navbar.css";

function Navbar(){
   
  
      
  
    const [activeLink, setActiveLink] = useState('home');
    const [clicked,setClicked]=useState(false)

    
  function open_nav()
  {
    setClicked(!clicked)
  }
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const listItemStyle = {
    width:"100%",
    
    marginBottom: '2px',
    color: '#FD8F8F',
    
    cursor: 'pointer',
    position:"relative",
    top:"5px"
  };

  const activeStyle = {
    color: 'white', // Change this to the color you want for the active page
  };
  
    return (
      <header style={{ backgroundColor: '#321527',    position: "fixed",
    width: "100%",zIndex:"3000" }} className="navBar" >
        <div  style={{ textAlign: 'center', backgroundColor: '#321527' }}>
        <div className="bar" onClick={open_nav} style={{color:' rgb(253, 143, 143)',display:"none"}}>
          {clicked ? 'X' : '☰'}
        </div>
          <ul class={clicked?"nav-style open":"nav-style"}>
          <li
            style={activeLink === 'home' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('home')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', }}>
              HOME
            </Link>
          </li>
          <li
            style={activeLink === 'events' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('events')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>
              EVENTS
            </Link>
          </li>
          <li
            style={activeLink === 'gallery' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('gallery')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/imagegallery" style={{ color: 'inherit', textDecoration: 'none' }}>
              GALLERY
            </Link>
          </li>
          <li>
          <img src={TMFALogo} alt="Logo" className="Logo" style={{ height: '45px', width: '48.2px',position:'relative',bottom:'5px'}} />
          </li>
          <li
            style={activeLink === 'books' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('books')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/books" style={{ color: 'inherit', textDecoration: 'none' }}>
              BOOKS
            </Link>
          </li>
          <li
            style={activeLink === 'achievements' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('achievements')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/achievements" style={{ color: 'inherit', textDecoration: 'none' }}>
              ACHIEVEMENTS
            </Link>
          </li>
          <li
            style={activeLink === 'contact' ? { ...listItemStyle, ...activeStyle } : listItemStyle}
            onClick={() => handleClick('contact')}
            className='poppins-bold'
            id="options"
          >
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
              CONTACT
            </Link>
          </li>
          </ul>
      
        </div>
      </header>
    );
};
export default Navbar;


