import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getActorMovie } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";

const ActorDetails = ({ actor }) => {
console.log(actor)
// const { data , error, isLoading, isError } = useQuery(
//     ["person", { id: person.id }],
//     getPersonMovie
//   );

//   if (isLoading) {
//     return <Spinner />;
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>;
//   }


  return (
    <>

<Typography variant="h5" component="h3">
        Actor
      </Typography>

      <Typography variant="h6" component="p">
        {actor.name}    
      </Typography>

    </>
  );
};

export default ActorDetails;