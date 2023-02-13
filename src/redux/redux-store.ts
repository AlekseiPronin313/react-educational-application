import {createStore, combineReducers, applyMiddleware, Action} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, undefined, A>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
