
// CREATING A CUSTOM HOOK , TO AVOID CODE REPEATING (fetching indivjully in each page components.)
import { useEffect } from "react";
import { useState } from "react";

const useFetch = ( apiPath ) => { // i have to fetch by the provided api path.

    // https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1 ( only the middle endpoint is changing , so providing it as a path to elements redering directly.)

    // match common ah irukkuratha vachuttu , endpoint ah direct ah , route la api path vaaribale ku pass panniyachu , here destructure that apiPath variable to fetch properly.

    const [data, setData] = useState([]) // going to store the fetch data in this state.

    const options = { // bearer authentication token.
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
        }
      };
    
      useEffect(() =>{ // whenever page loads , this  function runs.
    
       const fetchMovies = async()=>{
          const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`, options); // options is my bearer authetication token, link is fetching url.
          const data = await response.json();
          // console.log(data) // got data of full details of the movie finder , results variable holds the Full array of all movies.
          // console.log(data.results) // got array of movies >>next to  update it in my state.
          setData(data.results)
        }
        fetchMovies() // called function here.
      },[apiPath]) // provided the apiPath to dependency , based on the apiPath it will render and display details.

  return { // return the data , filled in the state , this custom hook return that state as object to destructure.
    data
  }
   
  
}

export default useFetch