import React from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar = () => {
    return (
        <nav className='d-flex align-items-center justify-content-around m-auto px-5'>
           <div className='d-flex align-items-center gap-4 '> <img src="Logo.svg" alt="" />
            <form className=' position-relative'>
                <input className='search position-relative px-2 border-end-0' type="search" placeholder="Search here..." aria-label="Search" />
                <img className=' search-icon position-absolute ' src='icon.png' height="40px" alt />
            </form></div>
            <div className=' mini-nav d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src="Explore.png" alt="" />
                    <NavDropdown className=' fw-bolder h6 pt-1' title="Explore" id="basic-nav-dropdown">
                        <NavDropdown.Item  href="#">people-Community</NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Places-Venues
                        </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">Program-Events</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                           Products-Store
                        </NavDropdown.Item><NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                           Blogs
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                
                <div className=' d-flex align-items-center'>
                <img src="Hobbies.png" alt="" />
                <NavDropdown className='fw-bolder h6 pt-1' title="Hobbies" id="basic-nav-dropdown"></NavDropdown>
                </div>
                <img src='Vector.png' />
                <img src='bell.png' />
                <img src='Product.png' />
                <button className=" btn1 ">Sign In</button>
                
            </div>
            <div className='mobile-nav d-flex justify-content-center align-items-center'>
                   <img src='search-icon.png'></img>
                   <img src='bell.png'></img>
                   <img src='hambug.png'></img>

                </div>
           

        </nav>

    )
}

export default Navbar
