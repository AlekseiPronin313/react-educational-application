import React from "react";
import {Route, Routes} from "react-router-dom";
import Style from './App.module.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";

function App(props) {
  return (
          <div className={Style.page}>
              <Header/>
              <Navbar props={props.state.friendsPage}/>
              <div className={Style.main}>
                  <Routes>
                      <Route index path='/profile' element={<Profile
                          store={props.store}
                      />}/>
                      <Route path='/dialogs' element={<DialogsContainer
                          store={props.store}
                      />}/>
                      <Route path='/news' element={<News/>}/>
                      <Route path='/music' element={<Music/>}/>
                      <Route path='/settings' element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
  );
}

export default App;
