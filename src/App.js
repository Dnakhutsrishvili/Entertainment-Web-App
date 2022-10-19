import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Data from "./data.json";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import TvSeries from "./Components/TvSeries";
import Bookmark from "./Components/Bookmark";

function App() {
  const [data, setData] = useState(Data);
  const [placeHolder, setPlaceHolder] = useState(
    "Search for movies or TV series"
  );
  const [search, setSearch] = useState("");
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    state: width < 600,
  };

  return (
    <div className="font-face-gm ">
      <Header
        placeHolder={placeHolder}
        setPlaceHolder={setPlaceHolder}
      ></Header>
      <Searchbar setSearch={setSearch} placeHolder={placeHolder}></Searchbar>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              setData={setData}
              stateResponsive={responsive.state}
              data={data}
              search={search}
            ></Home>
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              setData={setData}
              stateResponsive={responsive.state}
              data={data}
              search={search}
            />
          }
        />
        <Route
          path="/tvseries"
          element={
            <TvSeries
              setData={setData}
              stateResponsive={responsive.state}
              data={data}
              search={search}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              setData={setData}
              stateResponsive={responsive.state}
              data={data}
              search={search}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
