import { useState } from "react"
import Card from "./Card"

export default function index() {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchText)
  }

  return (
    <div className="bg-primary px-7 md:px-10 lg:px-12 pt-10">
      <form onSubmit={handleSearch}>
        <div className="h-11 w-full md:w-3/4 px-2 md:px-0 flex mx-auto">
          <input 
            type="text" 
            value={searchText} 
            placeholder="Search user with Email address" 
            onChange={e => setSearchText(e.target.value)} 
            className="h-full w-full bg-[#36373F] rounded-l-lg indent-5 text-white focus:outline-none active:outline-none" 
            required
          />
          <button type="submit" style={{ backgroundColor: '#36373F' }} className="h-full px-4 rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-7 w-7" style={{filter: 'invert(100%) sepia(97%) saturate(13%) hue-rotate(237deg) brightness(104%) contrast(104%)'}} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/></svg>
          </button>
        </div>
      </form>
      <p className="text-white text-2xl ml-3 mt-6">Suggestions:</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-10 lg:gap-12 mt-8">
        {/* Grid-item start here! */}
        {['Gusion', 'Akai', 'Johnson', 'Bruno', 'Kimmy'].map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  )
}
