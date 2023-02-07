import React from "react";
import Style from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        props.props.map((dialog, id) => {
            return (
                <NavLink key={id} className={(navData) => navData.isActive ? `${Style.active}` : `${Style.dialog}`}
                         to={`/dialogs/${dialog.id}`}>
                    {dialog.name}
                </NavLink>
            )
        })
    )
}

export default DialogItem
