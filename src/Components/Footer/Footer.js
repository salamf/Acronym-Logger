import React from "react";

import "./Footer.css";

function Footer() {
    return (
        <div className="footer-stage">
            <div className='footer'>
                <ul className="options">
                    <li className="option"><a href=".">Home</a></li>
                    <li className="option"><a href=".">Disclaimer</a></li>
                    <li className="option"><a href=".">Privacy</a></li>
                    <li className="option"><a href=".">Accessibility</a></li>
                    <li className="option"><a href=".">Copyright</a></li>
                    <li className="option"><a href=".">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;