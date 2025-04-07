
// CREATING A CUSTOM HOOK , TO AVOID CODE REPEATING (fetching indivjully in each page components.)
import { useEffect } from "react";
import { useState } from "react";

const useFetch = ( apiPath , queryTerm = "") => { // i have to fetch by the provided api path., nma create pandra custom hook ku use dra keyword vachuthan create pannanum..

    // na search componet la pass panna queryterm ah inga get panniten..
  
    // https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1 ( only the middle endpoint is changing , so providing it as a path to elements redering directly.)

    // match common ah irukkuratha vachuttu , endpoint ah direct ah , route la api path vaaribale ku pass panniyachu , here destructure that apiPath variable to fetch properly.

    const [data, setData] = useState([]) // going to store the fetched data , in this state.

    const options = { // bearer authentication token.
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
        }
      };
    
      useEffect(() =>{ // whenever page loads , this  function runs.
    
       const fetchMovies = async()=>{

          const response = await fetch(`https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}`,options ); // options is my bearer authetication token, link is fetching url.
          // i passed the query term also , na search pandra movie display pandrathukkandi..

          const data = await response.json(); // finally after fetched successfully , this state holds the array of 20 movies.

          // console.log(data) // got data of full details of the movie finder , results variable holds the Full array of all movies.
          // console.log(data.results) // got array of movies >>next to  update it in my state.
          setData(data.results) // setData function use panni ennoda , data state la update pandren..
        }
        fetchMovies() // called function here.
      },[apiPath, queryTerm]) // based on the api path , that is endpoint fetch panni data tharum..
      //  dependency la queryTerm , beacuse na ethachu search pannalum ithu fetch pannanum..

  return { // return the data as object so that i can destructure the movie details i needed .
    data // intha data ennoda state , setData function use panni na update pannatha , object ah return pandren.., .
  }
   
  // after queryTerm , it works when i type movie name in the url parameter ...
  // ex : http://localhost:5173/search/?q=avatar , im getting movies i search in the url parameter..
  // next i need to search in the search field for user experience..
  
}

export default useFetch