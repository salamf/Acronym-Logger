import React from "react";

import "./GovNavBar.css";

function GovNavBar() {
    const style = {
        "background": "#F8F8F8",
        "margin-top": "130px"
    }

    return (
        <div>
            <body style={style} >
                <header>
                    <div class="banner">
                        <a href="https://gov.bc.ca" alt="Go to the Government of British Columbia website">
                            {/* <img src="../assets/images/logo-banner.svg" alt="Go to the Government of British Columbia website" /> */}
                        </a>
                        <h1>Hello British Columbia</h1>
                    </div>
                    <div class="other">
                        <a class="nav-btn">
                            <i class="fas fa-bars" id="menu"></i>
                        </a>
                    </div>
                </header>
                <nav class="navigation-main" id="navbar">
                    <div class="container">
                        <ul>
                            <li><a href="sample.html" class="active">Link 1</a></li>
                            <li><a href=".">Link 2</a></li>
                            <li><a href=".">Link 3</a></li>
                            <li><a href=".">Link 4</a></li>
                            <li><a href=".">Link 5</a></li>
                            <li><a href=".">Link 6</a></li>
                        </ul>
                    </div>
                </nav>
            </body>
        </div>
    );
}

export default GovNavBar;