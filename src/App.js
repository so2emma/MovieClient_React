import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await api.get("/api/v1/movies");
    setMovies(response.data);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home movies={movies} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
