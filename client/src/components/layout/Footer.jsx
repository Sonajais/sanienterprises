import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return <>
        <div className="container-fluid" style={{backgroundColor: "black"}}>
            <div className="container pt-5">
                <div className="row">
                    <div className="cards p-5 mb-5">
                        <div className="row mb-5">
                            <div className="col-3">
                                <h1>Home</h1>
                            </div>
                            <div className="col-3">
                                <h1>About Us</h1>
                            </div>
                            <div className="col-3">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <div className="row">
                            <div className="d-flex gap-3">
                                <span className="icon-circle">
                                    <FaLinkedin className="fs-5"/>
                                </span>
                                <span className="icon-circle">
                                   <FaTwitter className="fs-5"/>
                                </span>
                                <span className="icon-circle">
                                    <FaInstagram className="fs-5"/>
                                </span>
                                <span className="icon-circle">
                                   <FaLinkedin className="fs-5"/>

                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6"></div>
                            <div className="col-12 col-md-6">
                                <h5>© Copyright 2025 Sani Enterprises- All Rights Reserved</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer;