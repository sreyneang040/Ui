// import App from "../App.js";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import BorderAllIcon from "@material-ui/icons/BorderAll";
import FaceIcon from "@material-ui/icons/Face";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Dropdown, Image } from "react-bootstrap";
import '../Combine.scss'

function Sidebar() {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar ml-3">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <div className="user-profile d-flex no-block dropdown m-t-20">
                                <div className="user-pic">
                                    <Image
                                        src="images/users/1.jpg"
                                        alt="users"
                                        className="rounded-circle mt-2"
                                        width="40" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle className="text-dark bg-white text-muted border-0 pro-pic">
                                        <strong>Steve jobs</strong>
                                    </Dropdown.Toggle>
                                    <span className="op-5 user-email text-dark">varun@gmail.com</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <PersonOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> My Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <AccountBalanceWalletIcon className="m-r-5 m-2 m-l-5" width="17" /> My Balance
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <MailOutlineIcon className="m-r-5 m-2 m-l-5" width="17" /> Inbox
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <SettingsIcon className="m-r-5 m-2 m-l-5" width="17" /> Account Setting
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <PowerSettingsNewIcon className="m-r-5 m-2 m-l-5" width="17" /> Account Setting
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </li>
                        <li className="p-15 m-t-10 ml-2 mt-4">
                            <a
                                className="btn text-left create-btn text-white">
                                <LocalHospitalIcon />{" "}
                                <span className="hide-menu m-l-5 ">Create New</span>{" "}
                            </a>
                        </li>
                        <li className="sidebar-item mt-4">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/admin"
                                aria-expanded="false">
                                <DashboardIcon className="text-dark" />
                                <span className="hide-menu ml-2">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/profile"
                                aria-expanded="false">
                                <PersonOutlineIcon className="text-secondary" />
                                <span className="hide-menu ml-2">Profile</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/table" aria-expanded="false">
                                <BorderAllIcon className="text-secondary" />
                                <span className="hide-menu ml-2">Table</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/icons"
                                aria-expanded="false">
                                <FaceIcon className="text-secondary" />
                                <span className="hide-menu ml-2">Icon</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/blank"
                                aria-expanded="false">
                                <InsertDriveFileIcon className="text-secondary" />
                                <span className="hide-menu ml-2">Blank</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link waves-effect waves-dark sidebar-link"
                                href="/error"
                                aria-expanded="false">
                                <ReportProblemIcon className="text-secondary" />
                                <span className="hide-menu ml-2">404</span>
                            </a>
                        </li>
                        <li className="text-center p-40 upgrade-btn ml-4 mt-5 border border-0">
                            <a href="https://www.wrappixel.com/templates/xtremeadmin/"
                                className="btn d-block btn-danger text-white upgradeToPro" target="_blank">Upgrade to Pro</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside >
    );
}

export default Sidebar;