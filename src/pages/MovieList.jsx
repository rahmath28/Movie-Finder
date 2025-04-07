import useFetch from "../hooks/useFetch"
import Card from "../components/Card"
import { useEffect } from "react"




const MovieList = ({apiPath, title}) => { // api path  destructured.., and title attribute destructured ( title for to display the title in the browser of based on the end point..)

  useEffect(() =>{ 
    document.title=`${title} ` // displaying perfectly..
  })

        // url mosyly same than , just apipath dra variable , ( antha end poin kana path ah muttum , inga pass pandrom.)
        // ***  i can now destructure that apipath in movielist component.
        // so after destructure , nama create panna custom hook usefetch ku , antha destrucute panna path ah pass panni , usefetch hook la , fetch la intha api path ah vachu  fetch pandrom , 
        // fetching by useeffect hook , dependency la intha apipath ah kuduthuranum , so based on end point it fetches data , and that usefetch kooks return the data as object.
        // so that i can destructure the movie details wherever i needed, by import and  can destrucure from it..

  const{data:movie} = useFetch(apiPath) // data object ah movie nu get pandren .. beacuse Intha movielist component return kulla movie ya than map pandrom..
        // while destructure intha mari  colon vachu ( : ) , namakku thevayana variable name la get pannikkalam..
  // console.log(movie)

  return (

    <main>
      {/* intha style width of 28px to display image */}
      <section className="max-w-7xl mx-auto py-7"> 
        {/* used gried . */}
        <div  className="flex grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {
        movie.map((movie) => ( // in react map methd dont use curly braces , instead always use parenthesis ().
          <Card key={movie.id} movie={movie} /> // passed movie in a movie varible in tha Card component props and also must need to pass key , that is id.
        ))
      }
        </div>
      </section> 
    </main>
  )
}

export default MovieList