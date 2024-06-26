import React, { useState } from "react";
import "./App.css";
import Headers from "./Components/Headers";
import SearchPage from "./Components/SearchPage";
import RecommendedVideos from "./Components/RecommendedVideos";
import Sidebar from "./Components/Sidebar";
import Videoplayer from "./Components/Videoplayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { sideBarEffects } from "./utils/CommonUtils";
import AppMenu from "./Components/AppMenu";
import WebSocketComponent from "./Components/websocket";
function App() {
  const [IsSideBar, setIsSideBar] = useState("flex");
  const [IsMenuSection, setIsMenuSection] = useState("none");
  const [Theme, setTheme] = useState("dark");
  return (
    <sideBarEffects.Provider value={{ IsSideBar, setIsSideBar }}>
      <WebSocketComponent/>
      <div className="app">
        <Router>
          <Headers
            MenuSectionFunc={setIsMenuSection}
            MEnuSectionDisplay={IsMenuSection}
            theme = {Theme}
          />
          <AppMenu display={IsMenuSection} settheme = {setTheme} theme = {Theme}/>
          <Routes>
            <Route>
              <Route
                path="/youtube/:clickedVideo"
                element={
                  <div className="videoplayer">
                    <Sidebar theme = {Theme} />
                    <Videoplayer theme = {Theme} />
                  </div>
                }
              />
              <Route
                path="/search/:searchTerm"
                element={
                  <div className="app_page">
                    <Sidebar theme = {Theme} />
                    <SearchPage  theme = {Theme}/>
                  </div>
                }
              />
              <Route
                path="/"
                element={
                  <div className="app_page">
                    <Sidebar theme={Theme}/>
                    <RecommendedVideos theme = {Theme} />
                  </div>
                }
              />
            </Route>
          </Routes>
        </Router>
      </div>
    </sideBarEffects.Provider>
  );
}

export default App;
