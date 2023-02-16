import React from "react";
import Style from './Navbar.module.scss'
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className={Style.nav}>
            <div className={Style.box}>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/profile'>Profile</NavLink>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/dialogs'>Messages</NavLink>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/news'>News</NavLink>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/music'>Music</NavLink>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/users'>Find users</NavLink>
                <NavLink className={({isActive}) => isActive ? `${Style.active}` : `${Style.link}` } to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
