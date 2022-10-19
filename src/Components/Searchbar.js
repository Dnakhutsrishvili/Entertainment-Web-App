import React from "react";
import classes from "./Searchbar.module.css";
import searchIcon from "../assets/images/icon-search.svg";

function Searchbar(props) {
  return (
    <div className={classes.inputParent}>
      <img
        className={classes.searchIcon}
        src={searchIcon}
        alt="searchIcon"
      ></img>
      <input
        className={classes.input}
        type="text"
        placeholder={props.placeHolder}
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Searchbar;
