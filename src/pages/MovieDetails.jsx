import { useParams , Link} from "react-router-dom"; // used useparams hook , can get details of the movie i click by that id.
import { useEffect, useState } from "react";
// useParams() extracts dynamic values from the URL.




const MovieDetails = () => {

  const { id } = useParams(); // Extract the movie id from the URL
  // console.log(id);// got id

  const [movie, setMovie] = useState(null); // Set as null, not [], because i got as object

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
    }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
      const data = await response.json();
      setMovie(data); // movies stae holds the data i clicked.
    };

    fetchMovieDetails(); // Call the function 
  }, [id]); // dependency that destructure id, based on id the the usefeccet works


  if (!movie) return <p className="items-center  text-xl">Loading...</p>;

  return (

    <div className="flex justify-center items-center p-20 ">
   
      <div className="rounded-xl">
      <img
        className="w-[500px] h-[500px] object-cover "
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      </div>
      <div className="px-5">
        <h1 className="text-3xl font-bold mb-5">{movie.title}</h1>
        <p className="mt-4 text-lg text-gray-700 my-5">{movie.overview}</p>
        <Link to="/" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 inline-block">Back to home</Link>
        
      </div>
   
  </div>
  
  );
};

export default MovieDetails;