import React, { useState } from 'react';
import '../Admin.css'
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Dropdown, Image, Nav, Navbar, NavbarBrand, Button, NavItem } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Sidebar from './Sidebar'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import navbar from '../components/Navbar';

function Navbars() {
    const [sidebar, setSidebar] = useState(false);
    const [icons, setIcons] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos"></div>
                    <div className="lds-pos"></div>
                </div>
            </div>
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                <header className="topbar" data-navbarbg="skin5">
                    <Nav className="navbar top-navbar navbar-expand-md navbar-dark">
                        <div className="navbar-header" data-logobg="skin5">
                            <NavbarBrand href="/admin">
                                <b className="logo-icon">
                                    <Image src="/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                    <Image src="/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                                </b>
                                <span className="logo-text">
                                    <Image src="/images/logo-text.png" alt="homepage" className="dark-logo" />
                                    <Image src="/images/logo-light-text.png" className="light-logo" alt="homepage" />
                                </span>
                            </NavbarBrand>

                            <NavbarToggle className="show-sidebar waves-effect waves-light d-block d-md-none" href="">

                                <Navbar>
                                    <Link to='#' className='menu-bars menu-icon ml-auto '>
                                        <Button className="bg-dark border-0" onClick={() => setIcons(icons => !icons)} >{icons ? <FaIcons.FaBars className="buttonIcons" onClick={showSidebar} /> : <AiIcons.AiOutlineClose className="buttonIcons" onClick={showSidebar} />}</Button>
                                    </Link>
                                </Navbar>
                            </NavbarToggle>
                        </div>

                        <NavbarCollapse id="navbarSupportedContent" data-navbarbg="skin5">
                            <Navbar className=" float-start me-auto">
                                <NavItem className=" search-box"> <a className="nav-link waves-effect waves-dark">
                                    <SearchIcon /></a>
                                    <form className="app-search position-absolute" data-Toggle="#navbarSupportedContent">
                                        <input type="text" className="form-control" placeholder="Search &amp; enter" /> <a
                                            className="srh-btn"><CloseIcon /></a>
                                    </form>
                                </NavItem>
                            </Navbar>

                            <ul className="navbar-nav ml-auto">
                                <NavItem>
                                    <Dropdown>
                                        <Dropdown.Toggle className="text-muted border-0 pro-pic" style={{ background: "#414755" }}>
                                            <Image src="images/users/1.jpg" alt="users" className="rounded-circle mr-auto" width="40" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="javascript:void(0)">
                                                <PersonOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> My Profile
                                        </Dropdown.Item>
                                            <Dropdown.Item href="javascript:void(0)">
                                                <AccountBalanceWalletIcon className="m-r-5 m-2 m-l-5" width="17" /> My Balance
                                        </Dropdown.Item>
                                            <Dropdown.Item href="javascript:void(0)">
                                                <MailOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> Inbox
                                        </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </NavItem>
                            </ul>
                        </NavbarCollapse>
                    </Nav>
                </header>
                <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul>
                        <Sidebar />
                    </ul>
                </Nav>
            </div>

        </>
    );
}

export default Navbars;
