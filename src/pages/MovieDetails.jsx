import { useParams , Link} from "react-router-dom"; // used useparams hook from react outer dom., can get details of the movie i click by that id in the host url.
import { useEffect, useState } from "react"; // host url la kedacha id ya vachu ennala data get panna mudiyum , by useparamshook..

// useParams() extracts dynamic values from the URL.

// useparams() hook is from react router dom..

// useparam() hook muliyam , url la irunthu id get panna mudiyum .

// useparams hook use panni id than get panna mudiyum , get panna id ya vachu fetch panni , fetch panna movie details than stae create apnni athula store pandrom , 
// ippo antha state la irunthu than namakku theva yanatha destructure pandrom...

// inga na create panna state movie.



const MovieDetails = () => {

  // id kedaikitha by useparams nu check panneerukkom.., kedaikithu as object
  // const term = useParams(); // Extract the movie id from the URL
  // console.log(term);// got id as object..

  // id ah mattum destructure pandrom..
  const { id } = useParams(); // Extract the movie id from the URL
  // console.log(id);// got id.

  const [movie, setMovie] = useState({}); // id ah vachu get pandrathu enakku oru object ah than kedaikum , antha aobject ah than intha state la store pandrom..

    // this hook is for to display title of the movie in the browser..
    useEffect(() =>{
      document.title = `${movie.title} / Cinebite`
    }) // working successfully..

  const options = { //like  authentication token 
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
    }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options); // movie details ku na path specify pannala , so tmtb la irunthu athukkana fetch url eduthu id mattum pass pandren.

      const data = await response.json();
      // console.log(data) // got the full daata
      setMovie(data); // movies state holds the data of movie i got , when  i  clicked.
      
    };

    fetchMovieDetails(); // Call the function 
  }, [id]); // dependency that destructure id, based on id the the useffect, whenever id changes , this hook will run . and fetch that movie details by id..


  if (!movie) return <div className="flex items-center"><p className="text-5xl">Loading...</p>;</div>

  return (

    <div className="flex justify-center items-center p-20 ">
      {/* // i only get poster path alone in tmdb api, i got  https url from stack overflow or chatgpt. */}
      <div >
      <img className="w-[1500px] h-[500px] object-cover " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /> 
      </div>
      <div className="px-5">
        <h1 className="text-3xl font-bold mb-5">{movie.title}</h1>
        <p className="mt-4 text-lg text-gray-700 my-5">{movie.overview}</p>

        {/*  link for to navigate back to home.. */}
        <Link to="/" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 inline-block">Back to home</Link>
        
      </div>
   
  </div>
  
  );
};

export default MovieDetails;