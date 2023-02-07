import React from "react";
import Style from './Message.module.scss'

const Message = (props) => {
    return (
        props.props.map((message, id) => {
          return(
              <div key={id} className={Style.message}>
                  {message.message}
              </div>
          )
        })
    )
}


export default Message
