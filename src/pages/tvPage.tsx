import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToTvFavouritesIcon from "../components/cardIcons/addToTvFavourites";
import { DiscoverTvSeries, BaseTvProps } from "../types/interfaces";

const TvPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTvSeries, Error>(
    "discover-tv",
    getTvShows
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvSeries = data ? data.results : [];

  const tvFavourites = tvSeries.filter((t) => t.favourite);
  localStorage.setItem("tvFavourites", JSON.stringify(tvFavourites.map((t) => t.id)));

  return (
    <PageTemplate
      title="Discover TV"
      tvSeries={tvSeries}
      action={(tv: BaseTvProps) => {
        return <AddToTvFavouritesIcon {...tv} />;
      }}
    />
  );
};

export default TvPage;
