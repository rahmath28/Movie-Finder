import { useEffect, useState } from "react"
import Card from "../components/Card"

const MovieUpcoming = () => {

  const [movie,setMovie] = useState([]) // state to store my movies.

  const options = { // like bearer authentication token, we must have to pass it, then only we get response.
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
    }
  };

  useEffect(() =>{ 
   const fetchMovies = async()=>{
      const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options); // options is my bearer authetication token, passed top rated CATEGORY URL.
      const data = await response.json();
      // console.log(data) // got data of full details , results variable holds the Full array of all movies.
      // console.log(data.results) // got array of movies >>next to  update it in my state.
      setMovie(data.results) // updated movies in state.
    }
    fetchMovies() // called function here.
  },[])

  return (
    // used main tag to style once for all pages.
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div  className="flex grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {
        movie.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))
      }
        </div>
      </section> 
    </main>
  )
}

export default MovieUpcoming