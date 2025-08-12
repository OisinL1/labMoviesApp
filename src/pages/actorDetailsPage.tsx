import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import ActorHeader from "../components/actorHeader";
import ActorDetails from "../components/actorDetails";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery(["actor", id], () => getActorDetails(id));

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{(error as Error).message}</h1>;

  return (
    <div>
      <ActorHeader name={data.name} profile_path={data.profile_path} />
      <ActorDetails
        name={data.name}
        biography={data.biography}
        birthday={data.birthday}
        place_of_birth={data.place_of_birth}
      />
    </div>
  );
};

export default ActorDetailsPage;
