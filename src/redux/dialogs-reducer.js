const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: body}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer