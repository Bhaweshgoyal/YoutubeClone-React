import React from "react";
import "../css/AppMenu.css";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import TranslateIcon from "@mui/icons-material/Translate";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { Link } from "react-router-dom";
function AppMenu({ display }) {
  return (
    <div className="AppMenu" style={{ display: display }}>
      <div className="top-Content">
        <Avatar
          src="https://yt3.ggpht.com/yti/AHXOFjX7jeaN8JH4Z4H0TYx_xrZ4NkoiC1hP8Cqq-hn3Nw=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="bhawesh goyal"
          className="right-Content"
        />
        <div className="left-top-content">
          <h3>Bhawesh Goyal</h3>
          <h5>@bhaweshgoyal6874</h5>
          <Link to={"/"}>
          <a href="/">Manage your Google Account</a>
          </Link>
        </div>
      </div>
      <hr />
      <div className="nextContentDiv">
        <AccountCircleIcon className="icon" />
        <h5>Your Channel</h5>
      </div>
      <div className="nextContentDiv">
        <GroupIcon className="icon" />
        <h5>Youtube Studio</h5>
      </div>
      <div className="nextContentDiv">
        <SwitchAccountIcon className="icon" />
        <h5>Switch Account</h5>
      </div>
      <div className="nextContentDiv">
        <ExitToAppIcon className="icon" />
        <h5>Sign out</h5>
      </div>
      <hr />
      <div className="nextContentDiv">
        <CurrencyExchangeIcon className="icon" />
        <h5>Purchases and memberships</h5>
      </div>
      <div className="nextContentDiv">
        <FolderSharedIcon className="icon" />
        <h5>Your Data in Youtube</h5>
      </div>
      <hr />
      <div className="nextContentDiv">
        <ModeNightIcon className="icon" />
        <h5>Appearance : Light</h5>
      </div>
      <div className="nextContentDiv">
        <TranslateIcon className="icon" />
        <h5>Language : {"ENGLISH"}</h5>
      </div>
      <div className="nextContentDiv">
        <PhonelinkLockIcon className="icon" />
        <h5>Restricted Mode : {"OFF"}</h5>
      </div>
      <div className="nextContentDiv">
        <LanguageIcon className="icon" />
        <h5>Location : India</h5>
      </div>
      <div className="nextContentDiv">
        <KeyboardIcon className="icon" />
        <h5>Keyboard Shortcuts</h5>
      </div>
    </div>
  );
}

export default AppMenu;
