import React from "react";
import Style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsItemContainer from "./FriendsItem/FriendsItemContainer";

const Navbar = () => {
    return (
        <nav className={Style.nav}>
            <div className={Style.box}>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/profile'>Profile</NavLink>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/dialogs'>Messages</NavLink>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/news'>News</NavLink>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/music'>Music</NavLink>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/users'>Find users</NavLink>
                <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.link}` } to='/settings'>Settings</NavLink>
            </div>
            <FriendsItemContainer/>
        </nav>
    )
}

export default Navbar