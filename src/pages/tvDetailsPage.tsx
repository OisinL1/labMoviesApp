import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TvDetailsProps } from "../types/interfaces";
import { getTvDetails } from "../api/tmdb-api";

const TvDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: tv, error, isLoading, isError } = useQuery<TvDetailsProps, Error>(
    ["tv", id],
    () => getTvDetails(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TvDetails {...tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
