import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getSimilarMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const TemplateSimilar = ({ movie }) => {

  const { data , error, isLoading, isError } = useQuery(
    ["similar", { id: movie.id }],
    getSimilarMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const similar = data.results

  return (
    <>
  <div>&nbsp;</div>

<Typography variant="h3" component="h3">
        Similar movies
      </Typography>

      <div>&nbsp;</div>
            <ImageList sx={{ width: 'auto', height: 'auto' }} cols={5}> 
                
                {similar.map((results) => (
                    <ImageListItem key={results.poster_path
                    } cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                        alt={results.overview}
                    />

<ImageListItemBar
            title={results.title} />
            
                    </ImageListItem>

                ))}
            </ImageList>

    </>
  );
};

export default TemplateSimilar;