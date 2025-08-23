import React, { useContext } from "react";
import PageTemplate from "../components/templateActorListPage";
import { ActorsContext } from "../contexts/actorsContext";
import { useQueries } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromActorFavourites from "../components/cardIcons/removeFromActorFavourites";
import { BaseActorProps } from "../types/interfaces";

const MyActorsPage: React.FC = () => {
  const { favourites: actorIds } = useContext(ActorsContext);

  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId],
        queryFn: () => getActorDetails(actorId.toString()),
      };
    })
  );

  const isLoading = favouriteActorQueries.find((q) => q.isLoading === true);
  if (isLoading) return <Spinner />;

  const allFavourites = favouriteActorQueries.map((q) => q.data) as BaseActorProps[];

  return (
    <PageTemplate
      title="My Actors"
      actors={allFavourites}
      action={(actor: BaseActorProps) => <RemoveFromActorFavourites {...actor} />}
    />
  );
};

export default MyActorsPage;
