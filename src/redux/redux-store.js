import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer.ts";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer.ts";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
