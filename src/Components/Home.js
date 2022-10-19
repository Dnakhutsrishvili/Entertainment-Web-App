import React, { useState } from "react";
import classes from "./Home.module.css";
import categoryMovie from "../assets/images/icon-category-movie.svg";
import categoryTv from "../assets/images/icon-category-tv.svg";
import bookmarkEmpty from "../assets/images/icon-bookmark-empty.svg";

import bookmarkFull from "../assets/images/icon-bookmark-full.svg";

function Home(props) {
  const updateState = (movie) => {
    const newState = props.data.map((obj) => {
      if (obj.title === movie.title && obj.isBookmarked) {
        return { ...obj, isBookmarked: false };
      } else if (obj.title === movie.title && !obj.isBookmarked) {
        return { ...obj, isBookmarked: true };
      }

      return obj;
    });

    props.setData(newState);
  };
  return (
    <>
      {props.search === "" ? (
        <div className={classes.container}>
          <p className={classes.title}>Trending</p>
          <div className={classes.trending}>
            {props.data
              .filter((item) => item.isTrending === true)
              .map((item, index) => {
                return (
                  <div className={classes.mappedTrending} key={index}>
                    <div className={classes.overbanner}>
                      <div className={classes.banner}>
                        <p className={classes.trendingyear}>{item.year}</p>
                        <div className={classes.dot}> </div>
                        <img
                          className={classes.categoryImg}
                          src={categoryMovie}
                          alt="caregory"
                        ></img>
                        <p className={classes.trendingyear}>{item.category}</p>
                        <div className={classes.dot}> </div>
                        <p className={classes.trendingyear}>{item.rating}</p>
                        <div
                          onClick={() => {
                            updateState(item);
                          }}
                          className={classes.bookmarkContainer}
                        >
                          <img
                            className={classes.bookmarks}
                            src={
                              item.isBookmarked ? bookmarkFull : bookmarkEmpty
                            }
                            alt="bookmark"
                          ></img>
                        </div>
                      </div>

                      <p className={classes.trendingTitle}>{item.title}</p>
                    </div>

                    <img
                      className={classes.img}
                      src={"." + item.thumbnail.trending.small}
                      alt="img"
                    ></img>
                  </div>
                );
              })}
          </div>
          <p className={classes.titleRecomended}>Recommended for you</p>
          <div className={classes.recomended}>
            {props.data.map((item, index) => {
              return (
                <div key={index} className={classes.allMoives}>
                  <img
                    className={classes.imgAll}
                    src={
                      props.stateResponsive
                        ? "." + item.thumbnail.regular.small
                        : "." + item.thumbnail.regular.medium
                    }
                    alt="img"
                  ></img>
                  <div className={classes.description}>
                    <p className={classes.trendingyear}>{item.year}</p>
                    <div className={classes.dot}> </div>
                    <img
                      className={classes.categoryImg}
                      src={
                        item.category === "Movie" ? categoryMovie : categoryTv
                      }
                      alt="caregory"
                    ></img>
                    <p className={classes.trendingyear}>{item.category}</p>
                    <div className={classes.dot}> </div>
                    <p className={classes.trendingyear}>{item.rating}</p>
                    <div
                      onClick={() => {
                        updateState(item);
                      }}
                      className={classes.bookmarkContainerTrending}
                    >
                      <img
                        className={classes.bookmarks}
                        src={item.isBookmarked ? bookmarkFull : bookmarkEmpty}
                        alt="bookmark"
                      ></img>
                    </div>
                  </div>
                  <p className={classes.movieTitle}> {item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={classes.recomendedSearch}>
          {props.data
            .filter((item) =>
              item.title.toLowerCase().includes(props.search.toLowerCase())
            )
            .map((item, index, arr) => {
              return (
                <div key={index} className={classes.allMoives}>
                  <p className={classes.result}>
                    Found {arr.length} results for {"'" + props.search + "'"}
                  </p>
                  <div className={classes.imgback}>
                    <img
                      className={classes.imgAll}
                      src={
                        props.stateResponsive
                          ? "." + item.thumbnail.regular.small
                          : "." + item.thumbnail.regular.medium
                      }
                      alt="img"
                    ></img>
                  </div>
                  <div className={classes.description}>
                    <p className={classes.trendingyear}>{item.year}</p>
                    <div className={classes.dot}> </div>
                    <img
                      className={classes.categoryImg}
                      src={
                        item.category === "Movie" ? categoryMovie : categoryTv
                      }
                      alt="caregory"
                    ></img>
                    <p className={classes.trendingyear}>{item.category}</p>
                    <div className={classes.dot}> </div>
                    <p className={classes.trendingyear}>{item.rating}</p>
                    <div className={classes.bookmarkContainerTrending}>
                      <img
                        src={item.isBookmarked ? bookmarkFull : bookmarkEmpty}
                        alt="bookmark"
                      ></img>
                    </div>
                  </div>
                  <p className={classes.movieTitle}> {item.title}</p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default Home;
