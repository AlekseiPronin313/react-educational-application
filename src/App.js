import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Main from "./component/Profile";

function App() {
  return (
    <div className="page">
        <Header/>
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;
