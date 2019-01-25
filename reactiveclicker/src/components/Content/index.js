import React from "react";
import "./style.css";

function Content(props) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Clicky Game</a>
                    <ul className="right">
                        <li><p className="clickimgheader">Click an Image to begin!</p></li>
                        <li><p className="tally">Tally:{props.tally}</p></li>
                        <li><p className="score">Score:{props.score}</p></li>
                    </ul>
                </div>
            </nav>
            <header className="header">
                <h2>Clicky Game!</h2>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </header>

        </div>

    )

}

export default Content;

