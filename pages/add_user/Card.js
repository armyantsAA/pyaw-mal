export default function Card({ item }) {
  return (
    <div className="h-64 w-11/12 bg-[#36373F] mx-auto rounded-lg">
      <div className="pt-5 flex items-center flex-col">
        <img className="rounded-full h-24 w-24 md:h-28 md:w-28 object-cover" src={'https://picsum.photos/200/300'} alt="profile-img"/>
        <div className="divide-y-2 divide-secondary/40 w-4/5">
          <p className="text-xl text-center text-secondary mt-3 pb-2">{item}</p>
          <div className="flex flex-wrap pt-3 justify-around items-center">
            <p className="text-lg text-secondary">Matched: 2</p>
            <div className="rounded-full bg-tertiary h-10 w-10 flex justify-center items-center cursor-pointer drop-shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#1C1D22" d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}
