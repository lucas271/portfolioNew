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
        <div style={{position: "fixed", width: "100%", top: "85%", height: 'fit-content', zIndex: `5000000`}} className="d-flex align-items-center justify-content-center ">
            <span className={`${isSuccess ? 'text-bg-success': 'text-bg-danger'} slideIn  text-center rounded p-sm-4 p-3 py-3`} style={{position: "relative", width: "95%"}} ref={ref}>
                {message}
                <span  style={{position: "absolute", top: 4, right: 10, fontSize: '12px'}} onClick={() => {
                    clearInterval(interval)
                    ref.current?.classList.add("slideOut")
                    ref.current?.addEventListener("animationend", () => {
                        setIsResponse(false)
                        clearTimeout(interval)
                    })
                }} className={`btn ${isSuccess ? "btn-danger" : "btn-success"} rounded-circle px-1  p-0 cursor-pointer`}>X</span>
            </span>
        </div>
    </>
  }
  
  export default FlashMessage
  