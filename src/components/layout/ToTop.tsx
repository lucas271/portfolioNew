import { useEffect, useRef, useState } from "react"
import "../../main.css"
function ToTop() {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [isOut, setIsOut] = useState<boolean>(true)
    const toTopRef = useRef(null)

    const handleScroll = () => {
        const appearPoint = 200
        setIsOut(window.scrollY < appearPoint)
        window.scrollY > appearPoint && setIsHidden(false)
    };

    const clickBtn = () => {
        window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return (
    
    <span 
        ref={toTopRef} 
        onAnimationEnd={() => isOut && setIsHidden(true)}
        onClick={clickBtn}
        className={`toTop hover-overlay shadow-1-strong d-flex justify-content-center align-items-center rounded rounded-circle ${isOut ? 'slideOut': 'slideIn'} ${isHidden ? 'd-none' : 'd-block'}` } 
        style={{position: 'fixed', bottom: 30, left: 30, width: "50px", height: "50px",zIndex: "5000"}}
    >
        <svg height="45%" width="45%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
    </span>

    )
  }
  
  export default ToTop
  