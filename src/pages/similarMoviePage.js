import React from "react";
import { useParams } from 'react-router-dom';
import TemplateSimilar from "../components/templateSimilar";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const SimilarPage = (props) => {
  const { id } = useParams();

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
    
            <TemplateSimilar movie={movie} />
         
    </>
  );
};

export default SimilarPage;