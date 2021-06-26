 import React ,{ useState } from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom"; 
function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
        <div className="header__left">
         <MenuIcon />
         <Link to ="/">
          <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6F6Ksd__G2Jz2I2o0mKMYEThehX0zQxMvnC87wBD3v8dfxww3uuoI82rcAcVhdBKOYg&usqp=CAU"
          alt=""
         />
         </Link>
          </div>
     <div className="header__input">
         <input
          onChange={ (e) => setInputSearch (e.target.value)} 
          value={inputSearch} 
          placeholder="Search" 
          type="text"
          />
          <Link to={'/search/${inputSearch}'}>
          <SearchIcon className="header__inputButton"/>
          </Link>
         </div>

        <div className="header__icons">
         <VideoCallIcon className="header__icons"/>
         <AppsSharpIcon className="header__icons"/>
         <NotificationsIcon className="header__icons"/>
         <Avatar alt="Lalitha Vadavalli" src="https://avatars.githubusercontent.com/u/58090261?s=400&u=0cedcd1e207bee57d32989115b4a214b8dfb5d2b&v=4" />
        </div>

    </div>
    );
}

export default Header;
