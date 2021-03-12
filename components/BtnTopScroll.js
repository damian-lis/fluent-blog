import {useEffect, useState} from "react"

export default () => {
        const [show, setShow] = useState(false)
        const [isFooter, setIsFooter] = useState(false)
   
    const handleScrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const handleSetFooter = () =>{
        if ((window.innerHeight + window.scrollY + 64) >= document.body.offsetHeight) {
            setIsFooter(true)
        }else{
            setIsFooter(false)
        }
    }

    const handleShowScrollBtn = () =>{
        if (window.scrollY > 100 ) {
            setShow(true);  
          } else {
            setShow(false)     
          }
    }
   
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
              handleSetFooter()
              handleShowScrollBtn()
        })
    }, [])

    return(
        
           show && <div className={` transition-all bg-red-200 mx-auto fixed ${isFooter? "bottom-20" : "bottom-5"} w-full`}>
                <div className="relative bg-green-200 max-w-5xl mx-auto">
        <div onClick={handleScrollToTop} className="bg-yellow-500 p-7 absolute right-5 bottom-0 h-3 w-3 rounded-full flex justify-center items-center  ml-auto text-2xl text-blue-900 bg-opacity-90 cursor-pointer">
            <i className="fas fa-arrow-up "></i>
            </div>
        </div>
        </div>
    )
}