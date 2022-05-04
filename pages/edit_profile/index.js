import { useRef, useState } from 'react'
import EditIcon from './EditIcon'
import EditHobbyModal from './EditHobbyModal'

export default function index() {
  const [info, setInfo] = useState('Dreaming')
  const [name, setName] = useState('Sarah Joy')
  const [openModal, setOpenModal] = useState(false)
  const infoRef = useRef()
  const nameRef = useRef()

  const focusInfo = () => {
    infoRef.current.select()
  }

  const focusName = () => {
    nameRef.current.select()
  }

  return (
    <div className="bg-primary relative">
      <div className="pt-4">
        <button className="flex items-center px-7">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fill="#fff" fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-white text-xl md:text-2xl ml-5">Profile</span>
        </button>
      </div>
      <div className="flex flex-col items-center">
        {/* user profile picture */}
        <img className="rounded-full h-28 w-28 md:h-36 md:w-36 object-cover" src={'https://picsum.photos/200/300'} alt="profile-img"/>
        {/* user info display */}
        <div className="pt-5 divide-y-2 divide-secondary/20 w-2/3 md:w-1/2 lg:w-1/3">
          <div className="text-center mb-5">
            <p className="text-white text-xl">Sarah Joy</p>
            <p className="text-gray-300 text-lg mt-1">sarahjoy@gmail.com</p>
          </div>
          {/* edit info  */}
          <div className="py-6">
            <p className="text-gray-300 text-md ml-6">Info</p>
            <div className="flex items-center">
              <input 
                type="text" 
                value={info}
                ref={infoRef}
                onChange={e => setInfo(e.target.value)}
                className="bg-primary w-full text-white text-xl ml-6 mt-2 active:outline-none focus:outline-none" 
              />
              <button className="ml-1 focus:outline-none" onClick={focusInfo}>
                <EditIcon />
              </button>
            </div>
          </div>
          {/* edit name */}
          <div className="py-6">
            <p className="text-gray-300 text-md ml-6">Name</p>
            <div className="flex items-center">
              <input 
                type="text" 
                value={name} 
                ref={nameRef}
                onChange={e => setName(e.target.value)}
                className="bg-primary w-full text-white text-xl ml-6 mt-2 active:outline-none focus:outline-none" 
              />
              <button className="ml-1 focus:outline-none" onClick={focusName}>
                <EditIcon />
              </button>
            </div>
          </div>
          {/* edit hobby */}
          <div className="py-6">
            <p className="text-gray-300 text-md ml-6">Hobby</p>
            <div className="flex items-center">
              <div className="flex flex-wrap w-full ml-2 mt-2">
                {['Travel', 'Game', 'Drawing', 'Writing', 'Cooking', 'Coding'].map((item, idx) => (
                  <p className="bg-[#36373F] text-white rounded-2xl cursor-default px-4 py-1 my-2 ml-4 shadow-sm hover:bg-[#2d2d35]" key={idx}>{item}</p>
                ))}
              </div>
              <button className="ml-1 focus:outline-none" onClick={() => setOpenModal(true)}>
                <EditIcon />
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-tertiary text-xl text-primary font-medium shadow-md rounded-lg px-10 py-2 my-7">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Edit-Hobby Modal */}
      {openModal && <EditHobbyModal setOpenModal={setOpenModal} />}
    </div>
  )
}
