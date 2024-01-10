import React, { useEffect, useRef, useState } from 'react'
import './Resume.css'
import HTMLFlipBook from 'react-pageflip';
import { motion, transform } from 'framer-motion';







function Resume() {

// const [isFlipped, setIsFlipped] = useState(false)
// const [isAnimating, setIsAnimating] = useState(false)
// function handleFlip () {
// if(!isAnimating) {
// setIsFlipped (!isFlipped)
// setIsAnimating (true)
// }
// }


const style = {
  transform:'rotateX(40deg)' , 
  transition: 'transform 150ms ease', // smooth transition
 }
  
  return (
    <div >


        {/* <div className='flip-card w- [600px] h-[360px] rounded-md' onMouseEnter={handleFlip}>
<motion.div
className='flip-card-inner w-[100 %] h-[100 %]'
initial={false}
animate={{rotateX: isFlipped ? 180 : 360}}
transition={{ duration: 3, animationDirection: "normal"}}
onAnimation Complete={() => setIsAnimating (false)}>
<img className='img_resume'  src='https://thomasbosc.com/images/FR-2---CV-Thomas-Bosc.jpg'></img>
</motion.div>
</div> */}
<div class="flip-card" >
  <div class="flip-card-inner" style={style}>
    <div class="flip-card-front">
      <img src="https://thomasbosc.com/images/FR-2---CV-Thomas-Bosc.jpg" alt="Avatar" style={{width: '100vw', height: '300px'}}></img>
    </div>
    {/* <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div> */}
  </div>
</div>


       

    </div>
  )
}

export default Resume