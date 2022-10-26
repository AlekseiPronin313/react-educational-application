import React from "react";
import Style from './FriendsItem.module.css'
import Frends from "./Frends/Friends";

const  FriendsItem = (props) => {
    return (
        <div className={Style.friends}>
            <h3 className={Style.text}>Frends</h3>
            <div className={Style.box}>
                <Frends props={props.friendsPage}/>.
            </div>
        </div>
    )
}

export default FriendsItem