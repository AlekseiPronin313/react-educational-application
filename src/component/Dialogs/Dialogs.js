import React from "react";
import Style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const dialogData = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Ola'},
    {id: 4, name: 'Nasty'},
]

const messagesData = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hey'},
    {id: 3, message: 'da'},
    {id: 4, message: 'yes'},
]

const DialogItem = (props) => {
    return (
        props.dialog.map((dialog, id) => {
           return (
               <NavLink key={id} className={(navData) => navData.isActive ? `${Style.active}` : `${Style.dialog}`}
                     to={`/dialogs/${dialog.id}`}>
                {dialog.name}
            </NavLink>
           )
        })
    )
}

const Message = (props) => {
    return (
        props.messages.map((message, id) => {
          return(
              <div key={id} className={Style.message}>
                  {message.message}
              </div>
          )
        })
    )
}

const Dialogs = (props) => {
    return (
        <div className={Style.dialogs}>
            <div className={Style.dialogs_items}>
                <DialogItem dialog={dialogData}/>
            </div>
            <div className={Style.messages}>
                <Message messages={messagesData}/>
            </div>
        </div>
    )
}

export default Dialogs