import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromPlaylist from "../components/cardIcons/removeFromPlaylist";

const WatchList = () => {
  const {playlist: movieIds } = useContext(MoviesContext);

   //Create an array of queries and run in parallel.
  const watchListQueries = useQueries(
    movieIds.map((movieId) => {
       return {
        queryKey: ["movie", { id: movieId }],
         queryFn: getMovie,
       };
     })
   );
   //Check if any of the parallel queries is still loading.
   const isLoading = watchListQueries.find((m) => m.isLoading === true);

   if (isLoading) {
     return <Spinner />;
   }

   const movies = watchListQueries.map((q) => {
     q.data.genre_ids = q.data.genres.map(g => g.id)
     console.log(q.data.genres)
     return q.data

   });

  return (
    <PageTemplate
      title="My Watch List"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromPlaylist movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchList;