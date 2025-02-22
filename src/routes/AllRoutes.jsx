// we should provide browser router at top of all the component , top of App component.
import {Routes, Route } from "react-router"
import { MovieList, MovieDetails,  MovieTop ,MoviePopular, MovieUpcoming, Search, PageNotFound, } from "../pages"
// importing all pages component here , to provide route(path) .


export const AllRoutes = () =>{ // exoprt is a boiler plate code,  we have to use export keyeord here  like these while setting Route in AllRoures ..

    return (
        // Routes direct child should always be Route.
        // rout >> providing path(PAGE NAVIGATION)

        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movies/top" element={<MovieTop />} />
            <Route path="/movies/popular" element={<MoviePopular />} />
            <Route path="/movies/upcoming" element={<MovieUpcoming />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>

    )
}

// PATH  AND RENDERING ELEMETS

/// // created each pages for each endpoint and fetched by their url , by this way repeated codes of fetching repeatedly in multiple components.
// each elements rendered on their own pages.



