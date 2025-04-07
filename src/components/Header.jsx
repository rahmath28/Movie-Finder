import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate() // for to navigate.

  // for active link:
  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 ";

  // for inactive class
  const inActiveClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  // form ku submit event , to get searched movie
  const handleSubmit = (e) =>{
    e.preventDefault()

    // const queryTerm = e.target; // i got full form.
    // const queryTerm = e.target.search; // i got input field., intha serach ennana nama ccreate panna attribute name value. itha vachuthan value get panna porom..
    const queryTerm = e.target.search.value; // got value i type, that is movie name..
    e.target.reset() // once typed after the input remove aganum..

    // now na header la irukka search field la type pandrathu kedachuruchu, next enna pandren na use navigate hook ah use panni  , url search parameter ku navigate panni,
    // intha search field la type panna movie name , ennoda intha componenet la irukka queryTerm variable irukku atha match panndren in the url search param by use navigate hook
    // now i will get the movie i search.., because  na already serachparams hook use panni  ennoda search component la get panniten , just here usenavigate hook use panni enakku inga kedacha movie name ,
    // proper ah search field la irunthu pass pandren..

    // INTHA FUNCTION ENNA RETURN PANNUTHUNA , NAVIGATE PANNUTHU..
    return navigate(`search/?q=${queryTerm}`) // finally worlking successfully..

    // FINAL understood note : search component la useSearchParams hook use panni , q dra argument pass panni , movies ah queryterm dra variable la , get pannen,
    // then atha fetch pandrathukku use fetch la pass panni , usefetch hook la detsructure panni , based on the queryTerm fetch pannen movies , depenendency la yum antha queryterm kuduthutten , 
    // ippo based on queryterm also the usefetch hook fetches data.
    // ana enakku use experience ku , search field la search pandrathu than venum so , here created a form , input la attribute create panni atha vachu value get panni , navingate pandre inthe url param ku ..
    // en navigation na useSearchParam hook already search pandratha display pannuthu , atha na ennoda search fiells ah vachu panndren avlotha..
  }
  return (
    <header>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinbite</span>
          </NavLink>
          <div className="flex md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
             {/* / creating a form , because i have to get the movie i search by the input field.. */}
             {/* inga rendu input filed irukku , second one is for responsive .., so diraect ah value nu ennala get panna mudiyathu , so oru attribute create panni athu muliyama value ah get pandren.. */}
             {/* form submit panni  movie get panna porom.. */}
             <form onSubmit={handleSubmit}>
               {/* creating a name attribute to get input value , i search ( movie name get panna) */}
             <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
             </form>
            </div>
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              {/* Intha input ennoda responsive pora apoo vara search field ku , ithukkum form create pandren */}
              <form>
                {/* creating a name attribute to get input value , i search ( movie name get panna) */}
              <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/"  className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Top</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header

//  FOR NAVIGATIONS ACTIVE CLASS >> CHANGE A TAG TO NAV LINK , remember to pass end keyword to initial rendering page , that is home.

// aria-current="page" >> removed from home navigation doesnt need.
// remove <a tag="">  it "reloads", can use LInk tag or NavLink , in NavLink we can PASS A FUNNCTION IN ITS CALSSNAME.
// NavLink is from react router dom.
// for nav click we can pass a function in its class name , so using nav link for , to display active class in nav.
// pass >> end , to initial rendering page , (initial displaying page : HOME) , we can only use end keyword to initial rendering page ,  i have to use NavLink ,
// then only i can able to  pass end keyword like above code.
// now the active class changed , what i click will be the active class now. , by provided end keyword bcause of navlink .
// now storing the active and inactive class , in a variable and check condition , and providing it in navLink.


// simplifies the code based on condition. ( activeclass:true ( which i click) , else remaining navlinks activeclass:false)

// <NavLink to="/" className={activeClass => console.log(activeClass)}>Home</NavLink>
// now that activeClass holds one object , that conatins isActive object that displays the navigation activeclass is true(what i click), others are false
// directly destructure that ({isActive}) from  activeclass , and condition based on that.
// na click pandrathu active class so , active class works , for other in active works.