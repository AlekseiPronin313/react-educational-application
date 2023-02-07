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
import store from "../redux/redux-store";
import {initializeApp} from "../redux/app-reducer.ts";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('./Login/Login'));

class App extends React.Component {
    catchAllUnhandledErrors = () => {
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
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route path="*" element={<Navigate to="/profile" />} />
                        <Route path='/profile' element={<ProfileContainer/>}>
                            <Route path=':userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);

const JsApp = () => {
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}

export default JsApp
