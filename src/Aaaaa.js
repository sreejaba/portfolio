import React from 'react'
import MovingText from 'react-moving-text'

function Aaaaa() {
  return (
    <div style={{ height:'2000px',backgroundColor:'white' }}>
       <MovingText
  type="flipFromTop"
  duration="1100ms"
  delay="0s"
  direction="normal"
  timing="linear"
  iteration="1"
  fillMode="forwards">
  React-Moving-Text
</MovingText>
        </div>
  )
}

export default Aaaaa