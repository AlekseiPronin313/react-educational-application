import React from "react";
import Style from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";
import {AnyAction} from "redux";

const Header: React.FC = () =>{
    const login = useSelector((state: AppStateType) => state.auth.login)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const click = () => {
        dispatch(logout() as unknown as AnyAction)
    }

    return (
        <header className={Style.header}>
            <img className={Style.img} src='https://cdn-icons-png.flaticon.com/512/4147/4147869.png' alt='img_header'/>
            <div className={Style.loginBlock}>
                { isAuth ?
                    <div className={Style.box}>
                        <p className={Style.login}>{login}</p>
                        <button className={Style.link} onClick={click}>Log out</button>
                    </div>
                     :
                    <NavLink className={Style.link} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
