import React from "react";
import Style from './Message.module.css'

const Message = (props) => {
    return (
        props.props.messages.map((message, id) => {
          return(
              <div key={id} className={Style.message}>
                  {message.message}
              </div>
          )
        })
    )
}


export default Message