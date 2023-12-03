import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { getCastMovie } from "../../api/tmdb-api";
import Spinner from '../spinner';
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";


import { Link } from "react-router-dom";
const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie, children }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  //Cast View
  const { data , error, isLoading, isError } = useQuery(
    ["credits", { id: movie.id }],
    getCastMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const credits = data.cast

  return (
    <>
   
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}    
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{...chip}} />
          </li>
        ))}
  
      </Paper>

 
      <div>&nbsp;</div>

      <Typography variant="h5" component="h3">
        Cast
      </Typography>
     
<Paper>
  
<ImageList sx={{ width: 'auto', height: 'auto' }} cols={5} >
                
                {credits.map((cast) => (
                  <Link to={`/actor/${cast.id}`}>
                    <ImageListItem key={cast.profile_path}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                      
                        alt={cast.character}
                    />
                    <ImageListItemBar
            title={cast.character}
            subtitle={<span>Played by {cast.name}</span>}/>
                    </ImageListItem>
                    </Link>))}
            </ImageList>
            
           
</Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>  
  );
};
export default MovieDetails ;