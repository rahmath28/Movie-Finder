// we should provide browser router at top of all the component , top of App component.
import {Routes, Route } from "react-router"
import { MovieList, MovieDetails,  Search, PageNotFound, } from "../pages"
//removed movies of top, popular , upcoming .
// going to fetch top, popular,upcoming by thier fetch url and to display all in movielist.


export const AllRoutes = () =>{ // exoprt is a boiler plate code,  we have to use export keyeord here  like these while setting Route in AllRoures ..

    return (
        // Routes direct child should always be Route.
        // Route >> providing path(PAGE NAVIGATION)

        // fetching movies of top, popular, upcoming by their fetch url and displaying it in movielist.

        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" />} />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />
            <Route path="/search" element={<Search  />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>

        // passed specific fetch url keywords of end point in apiPath varible.
        
        // / >> now playing fetch url will run , render movielist component, 
        // if i pass specific id , that will fetch and render movie details component,
        // for top endpoint , fetch from top_rated url and rendering , movie list ( will fetch and display in movie list.).
        // for popular endpoint , fetch from popular url and rendering , movie list ( will fetch and display in movie list.)
        // for upcoming endpoint , fetch from upcoming url and rendering , movie list ( will fetch and display in movie list.)

        // finally i have to  create a custome hook , to avoid reapeating ( fetch by their page component urls) and 
        // pass apiPath variable in custom hook to fetch properly.

    )
}

// ( / >> initial rendering page , home , element >> movielist.)



