import React from "react";
import {Route, Routes} from "react-router-dom";
import Style from './App.module.css'
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer, {withRouter} from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
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
                    <Routes>
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
