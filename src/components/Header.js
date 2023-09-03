import React from "react";
import {Link, NavLink} from "react-router-dom";

const Header = ()=> {

    return (
        <div className="headerBar">
            <div>
            <h3>Dictionary App</h3>
            </div>
            <div className="navBar">
            <NavLink to="/" className="link"> <h5>Home</h5> </NavLink> 
            <NavLink to="/history" className="link"> <h5>History</h5> </NavLink> 
                
            </div>
        </div>
    )
}
export default Header;