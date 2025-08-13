import React from "react";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";

import Spinner from "../components/spinner";
import AddToActorFavouritesIcon from "../components/cardIcons/addToActorFavourites";
import TemplateActorListPage from "../components/templateActorListPage";
import { BaseActorProps } from "../types/interfaces";





const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery("actors", getActors);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{(error as Error).message}</h1>;



  return (
    <TemplateActorListPage
      title="Popular Actors"
      actors={data ? data.results : []}
      action={(actor: BaseActorProps) => (
        <AddToActorFavouritesIcon {...actor} />
      )}
    />
  );
};

export default ActorsPage;
