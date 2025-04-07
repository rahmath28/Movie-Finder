// We should wrap the entire app with <BrowserRouter> in the main entry (usually index.js or App.js).

import { Routes, Route } from "react-router"
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages" // pages nu mattum kudutha pothum , athukke theriyum index la iunthu varuthunu..
//removed movies of top, popular , upcoming .

// going to fetch top, popular,upcoming by thier fetch url and to display all in movielist.


export const AllRoutes = () => { // 'export' is required to make the AllRoutes component available in other files.


    return (
        // Routes direct child should always be Route.
        // Route >> providing path(PAGE NAVIGATION)

        // fetching movies of top, popular, upcoming by their fetch url and displaying it in movielist.

        // title attribute just to dispay title for the endpoints..
        // passed it in movielist props.., so i can destrucure it.
        // title attribute for movie details  and search ku antha components laye kuduthurukken..
        <Routes>
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" title="Top_rated" />} />
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="/search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>

        //  / (slash na) : home page , * (star na ) : page not found , 
        // now playing, top, popular , upcoming intha ella component ku render agurathu " Movie list component than"
        // url mosyly same than , just apipath dra variable , ( antha end poin kana path ah muttum , inga pass pandrom.)
        // i can now destructure that apipath in movielist component.
        // so after destructure , nama create panna custom hook usefetch ku , antha destrucute panna path ah pass panni , usefetch hook la , fetch la intha api path ah vachu  fetch pandrom , 
        // fetching by useeffect hook , dependency la intha apipath ah kuduthuranum , so based on end point it fetches data , and that usefetch kooks return the data as object.
        // so that i can destructure the movie details i needed.
    )
}

// ( / >> initial rendering page , home , element >> movielist.)




