import preloader from "../../../assets/image/preloader.svg";
import React from "react";
import Style from './Preloader.module.css'

const Preloader = () => {
    return <div className={Style.box}>
        <img src={preloader}/>
    </div>
}

export default Preloader