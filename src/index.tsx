import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> 
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
