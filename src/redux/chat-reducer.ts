import {FormAction} from "redux-form";
import {v1} from 'uuid'
import {BaseThunkType, InferActionsType} from "./redux-store";
import {chatApi, ChatMessageType, StatusType} from "../api/chat-api";
import {Dispatch} from "redux";

type ChatMessage = ChatMessageType & { id: string }

const initialState = {
    messages: [] as ChatMessage[],
    status: 'pending' as StatusType
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))].filter(
                    (m, index, array) => index >= array.length - 100),
            }
        case 'SET_STATUS':
            return {
                ...state,
              status: action.payload.status
            }
        default:
            return state
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'MESSAGES_RECEIVED', payload: {messages}
    } as const),
    statusChanged: (status: StatusType) => ({
        type: 'SET_STATUS', payload: {status}
    } as const)
}

let _newMessageHandler: ((message: ChatMessageType[]) => void) | null = null
const newMessageHandler = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }

    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandler = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }

    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', newMessageHandler(dispatch))
    chatApi.subscribe('status-changed', statusChangedHandler(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.unsubscribe('messages-received', newMessageHandler(dispatch))
    chatApi.unsubscribe('status-changed', statusChangedHandler(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async () => {
    chatApi.sendMessage(message)
}

export default chatReducer
