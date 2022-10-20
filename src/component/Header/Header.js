import React from "react";
import Style from './Header.module.css'

const Header = () =>{
    return (
        <header className={Style.header}>
            <img className={Style.img} src='https://cdn-icons-png.flaticon.com/512/4147/4147869.png' alt='img_header'/>
        </header>
    )
}

export default Header