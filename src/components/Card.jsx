import { Link } from "react-router-dom";

const Card = ( {movie} ) => {

// console.log(movie) // displays the detailed information about the movie
// destructuring , i need from movies props.

const {poster_path, title, overview, id } = movie;
// poster_path >> image , title >> movie title, overview >> like movie description, id >> movie id

  return (
    // poster.path has movie images, displayed movie.
   <div>
     <Link to={`/movie/${id}`}>
      <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
        <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={movie.title} />
        
        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${title}`}</h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{`${overview}`}</p>

        
        </div>
      </div>
    </Link>
   </div>
  )
}

export default Card