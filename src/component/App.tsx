import React, {Suspense} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Style from './App.module.scss'
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import ProfileContainer, {withRouter} from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./common/Preloader/Preloader";
import store, {AppStateType} from "../redux/redux-store";
import {initializeApp} from "../redux/app-reducer";
import UsersPage from "./Users/UsersPage";
import Login from "./Login/Login";
import ChatPage from "../pages/Chat/ChatPage";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (promise: PromiseRejectionEvent) => {
        alert('Some error has occurred')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className={Style.page}>
                <HeaderContainer/>
                <Navbar/>
                <div className={Style.main}>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile"/>}/>
                            <Route path="*" element={<Navigate to="/profile"/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}>
                                <Route path=':userId' element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/users' element={<UsersPage/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/chat' element={<ChatPage/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const JsApp: React.FC = () => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default JsApp
