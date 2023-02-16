import React from "react";
import Style from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
}

const DialogItem: React.FC<PropsType> = ({name, id}) => {
    return (
        <NavLink className={(navData) => navData.isActive ? `${Style.active}` : `${Style.dialog}`}
                 to={`/dialogs/${id}`}>
            {name}
        </NavLink>
    )
}

export default DialogItem
