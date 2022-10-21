import React from "react";
import {Route, Routes} from "react-router-dom";
import Style from './App.module.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function App(props) {
  return (
          <div className={Style.page}>
              <Header/>
              <Navbar props={props.state.friends}/>
              <div className={Style.main}>
                  <Routes>
                      <Route index path='/profile' element={<Profile props={props.state.posts} />}/>
                      <Route path='/dialogs' element={<Dialogs props={props.state}/>}/>
                      <Route path='/news' element={<News/>}/>
                      <Route path='/music' element={<Music/>}/>
                      <Route path='/settings' element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
  );
}

export default App;
