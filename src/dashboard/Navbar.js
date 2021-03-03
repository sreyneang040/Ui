import {
    FaFacebookMessenger,
    FaSearch,
    FaUser,
    FaWallet
} from "react-icons/fa";
import { Dropdown, Image, Container, Form, Nav, Navbar } from 'react-bootstrap'
import '../Admin.css'
const Navbars = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark">
        <Navbar.Brand href="#home">
            <b class="logo-icon">
                <Image src="/images/logo-light-icon.png" alt="homepage" class="light-logo" />
            </b>
            <span class="logo-text">
                <Image src="/images/logo-light-text.png" class="light-logo" alt="homepage" />
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <a className="ml-5 "><FaSearch/></a>
            </Nav>
            <Nav>
                <Nav.Link className="dropdownToggle">
                    <Dropdown>
                        <Dropdown.Toggle id="navbarDropdown" bg="danger">
                            <Image src="/images/users/1.jpg" alt="user" className="rounded-circle  bg-dark" width="31" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <a class="dropdown-item" href=""><FaUser className="mr-3" />
                                    My Profile</a>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <a class="dropdown-item" href="">< FaWallet className="mr-3" />
                                My Balance</a>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                <a class="dropdown-item" href="">< FaFacebookMessenger className="mr-3" />
                                Inbox</a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                           
                    </Dropdown>
                </Nav.Link >
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Navbars