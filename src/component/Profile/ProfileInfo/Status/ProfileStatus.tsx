import React, {ChangeEvent, useEffect, useState} from "react";
import Style from './ProfileStatus.module.scss'

type PropsType = {
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                                   onBlur={deactivateEditMode} value={status}/>
                        }
                    </div>
                    :
                    <span className={Style.status}>{props.status || '___'}</span>
            }
        </div>
    )
}

export default ProfileStatus
