// we should provide browser router at top of all the component , top of App component.
import {Routes, Route } from "react-router"
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";


// importing all pages component here , to provide route(path) .

export const AllRoutes = () =>{ // exoprt is a boiler plate code,  we have export like these for AllRoutes while setting Route.

    return (
        // Routes direct child should always be Route.

        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movies/top" element={<MovieList />} />
            <Route path="/movies/popular" element={<MovieList />} />
            <Route path="/movies/upcoming" element={<MovieList />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>

    )
}

// PATH  AND RENDERING ELEMETS

// ( / >> means home page)
// we have set path then mention , which elements should render , render means load.
// if i pass particular id , movie details should render.
// top end point :path="/movies/top" >> getting movies from top end point of movies and displaying it in movie list.
// upcoming end point :path="/movies/upcoming" >> getting movies from upcoming end point of movies and displaying it in movie list.
// popular end point :path="/movies/popular" >> getting movies from popular end point of movies and displaying it in movie list.
// search na >> getting fro search.
// * (hashtsress ( * ) >> means pagenotfound ) , end point unmatched it will work.



