import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
    return (
        <nav className="nav-bar">
            <Link to="/">Home Details</Link>
            <Link to="/character">Character</Link>
        </nav>
    );
}

export default NavLink;
