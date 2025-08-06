import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import { DiscoverMovies } from "../types/interfaces";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MovieFilterUI, { titleFilter, genreFilter } from "../components/movieFilterUI";
import { useContext } from "react"
import { MoviesContext } from "../contexts/moviesContext";

const titleFiltering = { name: "title", value: "", condition: titleFilter };
const genreFiltering = { name: "genre", value: "0", condition: genreFilter };

const UpcomingMoviesPage: React.FC = () => {
  // Using react-query for caching upcoming movies
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>("upcoming", getUpcomingMovies);
  const { filterValues, setFilterValues, filterFunction } = useFiltering([titleFiltering, genreFiltering]);
  const { addToMustWatch } = useContext(MoviesContext);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet = type === "title"
      ? [changedFilter, filterValues[1]]
      : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={displayedMovies}
        action={(movie) => (
  <PlaylistAddIcon
    color="primary"
    style={{ cursor: "pointer" }}
    onClick={() => addToMustWatch(movie.id)}
  />
)}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default UpcomingMoviesPage;