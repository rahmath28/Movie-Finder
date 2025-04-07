// useSearchParams to get details of the param by search.. : parameter la search pandrathu athan intha hook meaning..
import { useSearchParams } from "react-router-dom"
import Card from "../components/Card"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"



const Search = ({ apiPath }) => {

  const [searchParam] = useSearchParams()
  // parameter la search pandratha get panna poren

  const queryTerm = searchParam.get("q") // get method ku oru argument is required , ethachu oru argument kudukkanum..
  // argument na q nu pass pannirukken..

  console.log(queryTerm) // na url parameter  la type pandrathu kedaikithu..
  // http://localhost:5173/search/?q=goat , here q dra arguemnt like variable mari ithula than nama type pandra movie name irukkum..
  // now i goot the movie i type in url param by useSearchParams , now i have to try to fetch that movie by my usefetch hook..

  // this hook for to display the title of the movie by queryterm..
  useEffect(() =>{
    document.title=`${queryTerm} / Cinebite`
  }) // working properly..

  const { data: movie } = useFetch(apiPath, queryTerm) // passed queryTerm to fetch .., na pass pannatha ennoda usefetch hook la get pannanum..
  return (
    // used main tag to style once for all pages.
    <main>

      {/*  JUST SERACH FILE LA TYPE PANDRATHU , MATCH AGALANA , MESSAGE DISPLAY PANDRATHUKKANDI , BELOW ONE */}
      <section>
        <p className="text-3xl text-gray-800">{movie.length === 0 ? `No Results Found For The Movie :  '${queryTerm}'` : `Results For the Movie : '${queryTerm}'`}</p>
      </section>


      {/* Search component la yum , movie list la display pandra marai , na serach pandra title l airukka movies ah display panna poren.., so copied main of movielist.. */}
      <section className="max-w-7xl mx-auto py-7">
        {/* used gried . */}
        <div className="flex grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

export default Search