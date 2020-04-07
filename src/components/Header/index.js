import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="/">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      <div className="header_img">
        <a href="https://github.com/simbapryd3" target="https://github.com/simbapryd3"><img src={require('../../../src/blogPostImages/GITHUB.png')} alt="theres a picture here" /></a>
        <a href="https://twitter.com/2muchpryd3" target="https://twitter.com/2muchpryd3"><img src={require('../../../src/blogPostImages/twitter.png')} alt="theres a picture here" /></a>
        <a href="https://www.instagram.com/2muchpryd3/" target="https://www.instagram.com/2muchpryd3/"><img src={require('../../../src/blogPostImages/ig.png')} alt="theres a picture here" /></a>
        <a href="https://www.fbi.gov" target="https://www.fbi.gov"><img src={require('../../../src/blogPostImages/fb.png')} alt="theres a picture here" /></a>
      </div>
    </header>
  )

}

export default Header