import React from "react";

import "./Footer.css";

function Footer() {
    return (
        <div className="footer-stage">
            <div className='footer'>
                <ul className="options">
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home">Home</a></li>
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a></li>
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a></li>
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home/accessible-government">Accessibility</a></li>
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home/copyright">Copyright</a></li>
                    <li className="option"><a href="https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;