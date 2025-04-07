import { Link } from "react-router-dom";
import BackUp from"../assets/backup.jpg"
// images ah nama epdi  venumo import pannikkalam variable.

const Card = ( {movie} ) => { // destrucuring movie.

// console.log(movie) // displays the detailed information about the movies of 20 array.
// destructuring , i need from movies props.

const {poster_path, title, overview, id } = movie; // from movies i passed in card component and destructured here..
// poster_path >> image , title >> movie title, overview >> like movie description, id >> movie id

// checking movie image , if not , displaying backup immage

// for to add poster path refer innternet for tmtb  .

const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp; // movie ku poster path iruntha antha poster path display agum , illana ennoda backup image display agum..
// const image = false ? `https://image.tmdb.org/t/p/w500/${poster_path}` : BackUp; // tried for backup image..
  return (
    // poster.path has movie images, displayed movie.
  
    // intha link kulla en images kudukkurom na , atha click panna athoda details ah display pannanum.., 
    // intha movie click pannumpothu athoda , na get panna id kedaikum , so based on that apipath la kuduthurukka common url endpoint fetch panni movie details display pannum..

    // ***  intha link la / vachuthan start pannanum , appothan top , popular , upcoming ellam proper ah id ah get panni , fetch panni movie details display agum..
    //  illana page not found nu varum , display pannathu carefull.. ****
     <Link to={`/movie/${id}`} > 
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
        <img className="rounded-t-lg" src={image} alt={movie.title} />
        
        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${title}`}</h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{`${overview}`}</p>

        
        </div>
      </div>
    </Link>

  )
}

                              /////  MUST READ THIS NOTE /////////

    // MOST IMPORTANT ONE TO REMEMBER , TO GET DETAILS OF MOVIE IN ECH ENDPOINTS..

    // 1) . When you use /movie/${id} — It works! ( / : vachuthan start pannanum ) , This sends you to: ( ex :  http://localhost:5173/movie/123 ),
    // 2). Your React router checks the routes and finds this: <Route path="/movie/:id" element={<MovieDetails />} /> , So it knows to show the MovieDetails page!
    // 3). If you remove the / and just do this ( / >> removed slash na): You're not starting from the root (/) — you're adding to the current path.
    // 4). So if you're on: http://localhost:5173/movies/popular , Then the link becomes: http://localhost:5173/movies/popular/movie/123 ❌
    // 5).  Uh-oh! 🥴 There is no route for this in your router. That’s why you get: Page Not Found ❗

    // 6). FINALLY :  Simple Rule , ✅ Start with ( / ) — when you want to go to a specific full path(details) ,    ❌ Don’t skip / — unless you want to navigate relative to the current path.


export default Card

