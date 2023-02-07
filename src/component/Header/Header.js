import React from "react";
import Style from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return (
        <header className={Style.header}>
            <img className={Style.img} src='https://cdn-icons-png.flaticon.com/512/4147/4147869.png' alt='img_header'/>
            <div className={Style.loginBlock}>
                { props.isAuth ?
                    <div className={Style.box}>
                        <p className={Style.login}>{props.login}</p>
                        <NavLink className={Style.link} onClick={props.logout}>Log out</NavLink>
                    </div>
                     :
                    <NavLink className={Style.link} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
