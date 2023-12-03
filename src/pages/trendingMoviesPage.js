import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTrendingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const TrendingMoviesPage = (props) => {

  const { data, error, isLoading, isError }  = useQuery('Trending', getTrendingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 
  return (
    <PageTemplate
      title="Movies Trending Today"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <AddToFavoritesIcon movie={movie} />
            <PlaylistAddIcon movie={movie} />
          </>
        );
      }}
      />
);
};
export default TrendingMoviesPage;