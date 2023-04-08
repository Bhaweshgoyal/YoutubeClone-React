import React, {useState} from "react";
import "./App.css";
import Headers from "./Components/Headers";
import SearchPage from "./Components/SearchPage";
import RecommendedVideos from "./Components/RecommendedVideos";
import Sidebar from "./Components/Sidebar";
import Videoplayer from "./Components/Videoplayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { sideBarEffects } from "./utils/CommonUtils";
import AppMenu from "./Components/AppMenu";
function App() {
  const [IsSideBar, setIsSideBar] = useState("flex");
  const [IsMenuSection , setIsMenuSection] = useState("none")
  return (
    <sideBarEffects.Provider value={{IsSideBar, setIsSideBar}}>
      <div className="app">
        <Router>
          <Headers MenuSectionFunc = {setIsMenuSection} MEnuSectionDisplay = {IsMenuSection}  />
          <AppMenu display={IsMenuSection}/>
          <Routes>
            <Route>
              <Route
                path="/youtube/:clickedVideo"
                element={
                  <div className="app_page">
                    <Videoplayer />
                  </div>
                }
              />
              <Route
                path="/search/:searchTerm"
                element={
                  <div className="app_page">
                    <Sidebar />
                    <SearchPage />
                  </div>
                }
              />
              <Route
                path="/"
                element={
                  <div className="app_page">
                    <Sidebar />
                    <RecommendedVideos />
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
