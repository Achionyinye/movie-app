import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movie" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
