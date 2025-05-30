import Brandlogo from '../../assets/images/logo/2.png';
import Image1 from '../../assets/images/a6.jpg';
// import { IoIosHeartEmpty } from "react-icons/io";
// import { BsHandbag } from "react-icons/bs";
// import { IoPersonOutline } from "react-icons/io5";
// import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";


function Navbar() {
    return <>
    <div className="container-fluid">
<div className="container">
    <div className="row">
        <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary container rounded-5 shadow-sm fixed-top">
                        <div className="container rounded-border border-2 border-dark">
                            <a className="navbar-brand" href="#"><img src={Brandlogo} alt="" className="rounded-5" width="100px" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-1 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active fs-5" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fs-5" aria-current="page" href="/About">About</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle active fs-5" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Services
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/Services1">Phd Topic Assistance</a></li>
                                            <li><a className="dropdown-item" href="/Services2">Phd Proposal Assistance</a></li>
                                            <li><a className="dropdown-item" href="/Services3">Phd Thesis Assistance</a></li>
                                            <li><a className="dropdown-item" href="/Services4">Data Analysis</a></li>
                                            <li><a className="dropdown-item" href="/Services5">Data Collection</a></li>
                                            <li><a className="dropdown-item" href="/Services6">Editing Support</a></li>
                                            <li><a className="dropdown-item" href="/Services7">Journal Manuscript Help</a></li>
                                            <li><a className="dropdown-item" href="/Services8">Phd Research Assistance</a></li>
                                            <li><a className="dropdown-item" href="/Services9">Phd Motivation Letter Writing Service</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="#">Social Media Maintaince</a></li>
                                            <li><a className="dropdown-item" href="#">Photo and Video Editing</a></li>
                                            <li><a className="dropdown-item" href="#">Website & App Design</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle active fs-5" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Research Paper
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="/Research1">Research Paper Writing</a></li>
                                            <li><a className="dropdown-item" href="/Research2">Research Paper Publication</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active fs-5" aria-current="page" href="/Contacts">Contacts</a>
                                    </li>
                                </ul>
        
                            </div>
                        </div>
                    </nav>
        </div>
    </div>
</div>
    </div>
            
    </>
}


export default Navbar;