import React from 'react';

import "./NavBar.css";
import BcGovImg from "../../assets/images/bc-gov-logo-white.png"

function NavBar() {
    return (
        <div className='nav-bar-stage'>
            <div className='nav-bar'>
                <div className='info'>
                    <img className="logo" src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg" />
                    <h2 className='title'>AcronLog</h2>
                </div>
            </div>
        </div >
    );
}

export default NavBar;