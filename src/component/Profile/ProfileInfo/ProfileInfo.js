import React from "react";
import Style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={Style.img} src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469591_domik_osen.jpg' alt="img_main"/>
            </div>
            <div>
                ava + info
            </div>
        </div>

    )
}

export  default ProfileInfo