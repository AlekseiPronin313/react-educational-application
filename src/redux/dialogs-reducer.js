const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

const initialState = {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Ola'},
            {id: 4, name: 'Nasty'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hey'},
            {id: 3, message: 'da'},
            {id: 4, message: 'yes'},
        ]
}

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => {
    return {type: ADD_MESSAGE, newMessageBody}
}

export default dialogsReducer