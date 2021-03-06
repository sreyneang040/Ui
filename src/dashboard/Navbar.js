import '../Admin.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Dropdown, Image, Nav, Container, Navbar} from "react-bootstrap";

const Navbars = () => {
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
                            <a className="navbar-brand" href="/admin">
                                <b className="logo-icon">
                                    <Image src="/images/logo-icon.png" alt="homepage" className="dark-logo" />
                                    <Image src="/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                                </b>
                                <span className="logo-text">
                                    <Image src="/images/logo-text.png" alt="homepage" className="dark-logo" />
                                    <Image src="/images/logo-light-text.png" className="light-logo" alt="homepage" />
                                </span>
                            </a>
                            <a className="nav-toggler show-sidebar waves-effect waves-light d-block d-md-none" href="">
                                <CloseIcon className="close-navbar" /></a>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                               
                            </Nav>
                                </Navbar.Collapse>
                        </div>
                        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                            <ul className="navbar-nav float-start me-auto">
                                <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark">
                                    <SearchIcon /></a>
                                    <form className="app-search position-absolute" data-Toggle="#navbarSupportedContent">
                                        <input type="text" className="form-control" placeholder="Search &amp; enter" /> <a
                                            className="srh-btn"><CloseIcon /></a>
                                    </form>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
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
                                </li>
                            </ul>
                        </div>
                    </Nav>
                </header>
            </div>
        </>
    )
}

export default Navbars

