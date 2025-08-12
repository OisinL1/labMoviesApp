import React from "react";
import { useQuery } from "react-query";
import { getActors } from "../api/tmdb-api";

import Spinner from "../components/spinner";
import AddToActorFavouritesIcon from "../components/cardIcons/addToActorFavourites";
import TemplateActorListPage from "../components/templateActorListPage";
import { BaseActorProps } from "../types/interfaces";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";





const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery("actors", getActors);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{(error as Error).message}</h1>;

  // For future extensibility, e.g., add to favourites, etc.


  return (
    <TemplateActorListPage
      title="Popular Actors"
      actors={data ? data.results : []}
      action={(actor: BaseActorProps) => (
        <>
          <AddToActorFavouritesIcon {...actor} />
          <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none', marginLeft: 8 }}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </>
      )}
    />
  );
};

export default ActorsPage;
