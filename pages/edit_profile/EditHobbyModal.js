import { useEffect } from "react"

export default function EditHobbyModal({ setOpenModal }) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27){
        setOpenModal(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div className="bg-black/50 absolute inset-0" onClick={() => setOpenModal(false)}>
      <div className="flex justify-center h-screen items-center">
        <div className="bg-neutral-50 rounded-lg h-fit w-3/4 md:w-4/6 py-5" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center">
            <p className="text-primary text-lg ml-5">Hobby List</p>
            <button onClick={() => setOpenModal(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
