import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  let navigate = useNavigate();
  return (
    <header className={classes.headerContainer}>
      <nav className={classes.headerparent}>
        <div>
          <img className={classes.logo} src={logo} alt="logo"></img>
        </div>
        <ul className={classes.navigation}>
          <li
            onClick={() => {
              props.setPlaceHolder("Search for movies or TV series");
              navigate("/");
            }}
            className={classes.home}
            style={
              props.placeHolder === "Search for movies or TV series"
                ? {
                    filter:
                      "invert(95%) sepia(95%) saturate(24%) hue-rotate(241deg) brightness(105%) contrast(100%)",
                  }
                : {}
            }
          ></li>

          <li
            onClick={() => {
              props.setPlaceHolder("Search for movies");
              navigate("/movies");
            }}
            className={classes.movies}
            style={
              props.placeHolder === "Search for movies"
                ? {
                    filter:
                      "invert(95%) sepia(95%) saturate(24%) hue-rotate(241deg) brightness(105%) contrast(100%)",
                  }
                : {}
            }
          ></li>

          <li
            onClick={() => {
              props.setPlaceHolder("Search for TV series");
              navigate("/tvseries");
            }}
            style={
              props.placeHolder === "Search for TV series"
                ? {
                    filter:
                      "invert(95%) sepia(95%) saturate(24%) hue-rotate(241deg) brightness(105%) contrast(100%)",
                  }
                : {}
            }
            className={classes.tvShows}
          ></li>
          <li
            onClick={() => {
              props.setPlaceHolder("Search for bookmarked shows");
              navigate("/bookmark");
            }}
            style={
              props.placeHolder === "Search for bookmarked shows"
                ? {
                    filter:
                      "invert(95%) sepia(95%) saturate(24%) hue-rotate(241deg) brightness(105%) contrast(100%)",
                  }
                : {}
            }
            className={classes.bookmark}
          ></li>
        </ul>
        <div>
          <img className={classes.avatar} alt="avatar" src={avatar}></img>
        </div>
      </nav>
    </header>
  );
}

export default Header;
