import { useEffect, useState } from "react"
import Card from "../components/Card"



const MovieList = () => {

  //In movie list going to fetch and display movies.
  // if i update state UI will automaticaally gets updated.
  const [movie,setMovie] = useState([]) // state to store my movies.
  // initially i have to display movies . >> can do by useEffect hook.

  const options = { // like bearer authentication token, we must have to pass it, then only we get response.
    method: 'GET',
    // based on application , these headers may change sometime like these.
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZmOThlOGQwNjE0NGNhZjQ4YmFjNDEzMDRhZmY2MiIsIm5iZiI6MTcyNzM1MzI4Mi45MDIwMDAyLCJzdWIiOiI2NmY1NTFjMjVlMzU0YzUwMTI3M2Y5MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qkkvHMU97xooQwnNO9xtgAex6-TYvaetg5kI7xoK8zs'
    }
  };

  useEffect(() =>{
   const fetchMovies = async()=>{
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options); // options is my bearer authetication token.
      const data = await response.json();
      // console.log(data) // got data of full details , results variable holds the Full array of all movies.
      // console.log(data.results) // got array of movies >>next to  update it in my state.
      setMovie(data.results)
    }
    fetchMovies() // called function here.
  },[]) // whenever page load , this hook will run.

  // next got movies , in my state , so displaying it in movieList , card displays abouts the movies and details , so passing my state as a prop movie varible in card.
  // then destructure it in card and make changes.


  // const dummyArray = new Array(6).fill(null) // initially checked by this dummy array. >> will get 6 object , cause passed 6.
  return (
    // used main tag to style once for all pages.
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div  className="flex grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* initially checked by this dummy array. */}
      {/* {
        dummyArray.map((__,index) =>(
          <Card key={index}/>
        ))
      } */}

      {
        movie.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))
      }
        </div>
      </section>
      
     
      
    </main>
  )
}

export default MovieList