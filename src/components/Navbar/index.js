import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('What are ypu looking for?');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Culture </NavLink></li>
                <li><NavLink to="/">Health </NavLink></li>
                <li><NavLink to="/">Technology </NavLink></li>
                <li><NavLink to="/">Motivation </NavLink></li>
                <li><NavLink to="/">Humor Me </NavLink></li>
                <li><NavLink to="/">Let's Talk </NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
                </form>

            </div>
        </div>
    )

}

export default Navbar