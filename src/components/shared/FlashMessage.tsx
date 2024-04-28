import { useRef } from "react"

interface flashInterface{
    message: string, 
    isSuccess?: boolean, 
    setIsResponse: React.Dispatch<React.SetStateAction<boolean>>,
}

function FlashMessage({message, isSuccess=true, setIsResponse}: flashInterface) {
    const ref = useRef<null | HTMLElement>(null)
    const interval = setTimeout(() => {
        ref.current?.classList.add("slideOut")
        ref.current?.addEventListener("animationend", () => {
            setIsResponse(false)
            clearTimeout(interval)
        })
    }, 1000 * 5)
    
    return <>
        <div style={{position: "fixed", width: "100%", top: "90%", height: 'fit-content'}} className="d-flex align-items-center justify-content-center ">
            <span className={`${isSuccess ? 'text-bg-success': 'text-bg-danger'} slideIn w-50 text-center rounded p-4`} style={{position: "relative"}} ref={ref}>
                {message}
                <span  style={{position: "absolute", top: 5, right: 10}} onClick={() => {
                    clearInterval(interval)
                    ref.current?.classList.add("slideOut")
                    ref.current?.addEventListener("animationend", () => {
                        setIsResponse(false)
                        clearTimeout(interval)
                    })
                }} className={`btn ${isSuccess ? "btn-danger" : "btn-success"} px-1 p-0 cursor-pointer`}>X</span>
            </span>
        </div>
    </>
  }
  
  export default FlashMessage
  