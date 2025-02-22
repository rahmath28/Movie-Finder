import useFetch from "../hooks/useFetch"
import Card from "../components/Card"




const MovieList = ({apiPath}) => {

  const{data:movie} = useFetch(apiPath)
  console.log(movie)

  return (

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

export default MovieList