import React from "react";
import "./navbar.style.scss";
import NavbarIcon from "../../navbar_icon/NavbarIcon";
import search from "../../../assets/svg/search_icon.svg";
import user from "../../../assets/svg/user_icon.svg";
import cart from "../../../assets/svg/cart_icon.svg";
import {Link} from "react-router-dom";

const itemNavbar = [{title:"فروشگاه" , href:"/"},{title:"درباره ی ما" , href:"about-us"}]
const Navbar =() =>{
    return(
        <nav className="navbar">
            <div>
                <ul  className="navbar_menu">
                    {itemNavbar.map(item =>(
                        <li>
                            <Link to={item.href}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container-icon">
                <NavbarIcon src={search} alt={"search _icon"}></NavbarIcon>
                <Link to="/login">
                    <NavbarIcon src={user} alt={"user_icon"}></NavbarIcon>   
                </Link>   
                <NavbarIcon src={cart} alt={"cart_icon"}></NavbarIcon>   
            </div>
        </nav>
    )
}

export default Navbar;