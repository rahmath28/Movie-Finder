import { Link } from "react-router-dom"
import PNG from "../assets/404.jpg"
import { useEffect } from "react"


const PageNotFound = () => {

  // for to display title as page not found
  useEffect(()=>{
    document.title="Page Not Found / Cinebite" 
  }) // changed succcessfully , react la SEO pandra konjam kaduppu , node la easy panikkalm intha title change pandrathulam..
  return (
    // used main tag to style once for all pages.
    <main className="flex items-center justify-center min-h-screen bg-grey-100 p-4">
      <section className="text-center">
     <img src={PNG} className="mb-5" alt="404-image" />
     <Link to="/">
     <button type="button" className="mb-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Back to Home</button></Link>
      </section>

    </main>
  )
}

export default PageNotFound