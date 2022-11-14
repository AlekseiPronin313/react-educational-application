import React, {useEffect, useState} from "react";
import Style from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

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
            {
                props.isOwner ?
                    <div>
                        {!editMode ?
                            <span className={Style.status_text}
                                  onDoubleClick={activateEditMode}>{props.status || '___'}</span>
                            :
                            <input className={Style.input} onChange={onStatusChange} autoFocus={true}
                                   maxLength='299' onBlur={deactivateEditMode} value={status}/>
                        }
                    </div>
                    :
                    <div>
                        <span className={Style.status}>{props.status || '___'}</span>
                    </div>
            }
        </div>
    )
}

export default ProfileStatus