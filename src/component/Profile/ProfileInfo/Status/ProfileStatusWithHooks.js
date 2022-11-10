import React, {useEffect, useState} from "react";
import Style from './ProfileStatus.module.css'

const ProfileStatusWithHook = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode ?
                <div>
                    <span className={Style.text} onDoubleClick={activateEditMode}>{props.status || 'da'}</span>
                </div>
                :
                <div>
                    <input className={Style.input} onChange={onStatusChange} autoFocus={true}
                           maxLength='299' onBlur={deactivateEditMode} value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook