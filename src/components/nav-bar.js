import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        // <nav class="navbar navbar-expand-lg navbar-dark ">
        //   <Link class="navbar-brand" href="#">Nine-Tails</Link>
        //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //     <span class="navbar-toggler-icon"></span>
        //   </button>
        //
        //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul class="navbar-nav ml-auto">
        //       <li class="nav-item">
        //         <Link class="nav-link" to="/">Home</Link>
        //       </li>
        //       <li class="nav-item">
        //         <Link class="nav-link" href="/about">About</Link>
        //       </li>
        //
        //
        //     </ul>
        //   </div>
        //
        // </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-dark">

        <div className="navbar fixed-top shadow-5-strong">
            <Link className="navbar-brand" to="/">
                <h3>Nine-Tails</h3>
            </Link>
            <ul className="nav justify-content-end navbar-right">
                <li className="nav-item items">
                    <Link className="nav-link" to="/form">
                        <h5>
                            <i className="fas fa-search"></i>
                        </h5>
                    </Link>
                </li>
                <li className="nav-item items">
                    <Link className="nav-link" to="/about">
                        <h5>
                            <i className="fas fa-question"></i>
                        </h5>
                    </Link>
                </li>
            </ul>
        </div>
        // </nav>
    );
}

export default Navbar;
