import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsType} from "./redux-store";
import {chatApi, ChatMessageType} from "../api/chat-api";
import {Dispatch} from "redux";

const initialState = {
    messages: [] as ChatMessageType[],
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

const chatReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        default:
            return state
    }
}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'MESSAGES_RECEIVED', payload: {messages}
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

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandler(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.unsubscribe(newMessageHandler(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}

export default chatReducer
