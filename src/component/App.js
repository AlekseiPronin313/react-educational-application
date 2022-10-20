import React from "react";
import {Route, Routes} from "react-router-dom";
import Style from './App.module.css'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Main from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function App() {
  return (
          <div className={Style.page}>
              <Header/>
              <Navbar/>
              <div className={Style.main}>
                  <Routes>
                      <Route path='/profile' element={<Main/>}/>
                      <Route path='/dialogs' element={<Dialogs/>}/>
                      <Route path='/news' element={<News/>}/>
                      <Route path='/music' element={<Music/>}/>
                      <Route path='/settings' element={<Settings/>}/>
                  </Routes>
              </div>
          </div>
  );
}

export default App;
