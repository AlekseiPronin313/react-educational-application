import React from "react";
import Style from './Friends.module.css'

const Frends = (props) => {
    return (
        props.props.map((frends, id) => {
            return (
                <div className={Style.frends} key={id}>
                    <img className={Style.img} src={frends.img} alt={`img_frends: ${frends.name}`}/>
                    <p className={Style.name}>{frends.name}</p>
                </div>
            )
        })
    )
}

export default Frends
