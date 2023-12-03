# Assignment 1 - ReactJS app.

Name: SAM TAYLOR

## Overview.

A web application that demonstrates a movies application using the TMDB database 

### Features.

= added Watchlist to allow users to add ovies to a watchlist rather than favourites. 
= added top rated mvies page
= added trending movies page 
= Added similar movies funtuion that takes the movie id and finds similar movies based on either genre or actors. 
= added actor into more info to show actors in each movie 
= added actor page following their biography via their ID 
= added new playlist and delete button MUI 

## Setup requirements.

Standard 

## API endpoints.
/watchlist - new watchlist similar to liked
/movies/toprated - taked tmbd top rated movies
/movies/trending - takes todays trending movies 
/similar/id - takes the mmovie id and produces similar movies 
/actor/id - shows all information on the actor 


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

           <Route path="/movies/watchlist" element={<WatchList />} /> 
            <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />
            <Route path="/similar/:id" element={<SimilarPage />} />
            <Route path="/actor/:id" element={<ActorPage />} />


## Independent learning (If relevant).



the following links were used for additional learning 

LOG IN LEARNING:
https://www.themoviedb.org/talk/5d284fad5f6c4916bc604062?page=2&language=es-ES
https://medium.com/flutter-community/complete-movie-app-authentication-16-768858c5be11
https://developer.themoviedb.org/reference/authentication-create-session-from-login
https://www.makeuseof.com/react-app-firebase-connect/


WATCH LIST LEARNING: 
https://www.themoviedb.org/talk/5389d111c3a3680af0000ff1


NB log in page is NOT FUNTIONAL firebase would not work for me. 
