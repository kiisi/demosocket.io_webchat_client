import React,{useEffect, useRef} from 'react'
import './Fab.scss'

const Fab = () => {

    const fabRef = useRef()
   useEffect(()=>{
        const body = document.querySelector("body")
        const fab = fabRef.current
        body.onscroll = () =>{
            if(window.scrollY > 400){
                fab.classList.add("fab-show")
            }else{
                fab.classList.remove("fab-show")
            }
        }
   })
   const scrollHandler = () =>{
    window.scroll({
        top:0,
        behavior:'smooth'
    })
   }
    return (
        <div className="fab"ref={fabRef} onClick={scrollHandler}>
            <span className="material-icons">expand_less</span>
        </div>
    )
}

export default Fab