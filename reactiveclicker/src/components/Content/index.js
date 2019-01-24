import React from "react";
import "./style.css";

function Content() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" className="brand-logo">Clicky Game</a>
                    <ul className="right">
                        <li><p className="clickimgheader">Click an Image to begin!</p></li>
                        <li><p>Components</p></li>
                        <li><p>JavaScript</p></li>
                    </ul>
                </div>
            </nav>
            <header class="header">
            <h2>Clicky Game!</h2>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </header>
            
        </div>

    )

}

export default Content;