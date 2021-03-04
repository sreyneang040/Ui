import '../Admin.css'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Dropdown } from "react-bootstrap";

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
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin5">
                    <a className="navbar-brand" href="index.html">
                        <b className="logo-icon">
                            <img src="/images/logo-icon.png" alt="homepage" className="dark-logo" />
                            <img src="/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                        </b>
                        <span className="logo-text">
                            <img src="/images/logo-text.png" alt="homepage" className="dark-logo" />
                            <img src="/images/logo-light-text.png" className="light-logo" alt="homepage" />
                        </span>
                    </a>
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                        <CloseIcon /></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                    <ul className="navbar-nav float-start me-auto">
                        <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark"
                                href="javascript:void(0)"><SearchIcon /></a>
                            <form className="app-search position-absolute">
                                <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                    className="srh-btn"><CloseIcon /></a>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <Dropdown>
                                    <Dropdown.Toggle className="text-muted bg-dark border border-0 pro-pic">
                                        <img src="images/users/1.jpg" alt="users" className="rounded-circle mr-auto" width="40"/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="javascript:void(0)">
                                            <PersonOutlineIcon className="m-r-5 m-l-5" width="17" /> My Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item href="javascript:void(0)">
                                            <AccountBalanceWalletIcon className="m-r-5 m-l-5" width="17" /> My Balance
                                        </Dropdown.Item>
                                        <Dropdown.Item href="javascript:void(0)">
                                            <MailOutlineIcon className="m-r-5 m-l-5" width="17" /> Inbox
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        </div>
    </>
    )
}

export default Navbars