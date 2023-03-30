import React , {useContext} from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import  HistoryIcon from "@mui/icons-material/History"
import  OndemandVideoIcon from "@mui/icons-material/OndemandVideo"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import ThumbUpAltOutIcon from "@mui/icons-material/ThumbUpAltOutlined"
import ExpandMoreOutLinedIcon from "@mui/icons-material/ExpandMoreOutlined"
import { sideBarEffects } from "../utils/CommonUtils";
import "../css/sidebar.css";

function Sidebar() {
  const sideBarStyle = useContext(sideBarEffects)
  return (
    <div className="sidebar" style={{display : sideBarStyle.IsSideBar}}>
      <SidebarRow selected={true} Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscription" />

      <hr />

      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
      <SidebarRow Icon={ThumbUpAltOutIcon} title="Liked Video" />
      <SidebarRow Icon={ExpandMoreOutLinedIcon} title="Show more" />
    </div>
  );
}

export default Sidebar;
