const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

const initialState = {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Ola'},
            {id: 4, name: 'Nasty'},
        ] as Array<DialogType>,
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hey'},
            {id: 3, message: 'da'},
            {id: 4, message: 'yes'},
        ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            }
        default:
            return state
    }
}

type ActionsTypes = SendMessageCreatorType

type SendMessageCreatorType = {
    type: typeof ADD_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => {
    return {type: ADD_MESSAGE, newMessageBody}
}

export default dialogsReducer
