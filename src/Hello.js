import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Hello.css'
import MovingText from 'react-moving-text'
import profileback from './image/projectback.png';
import profilefront from './image/projectfront.png';



function Hello() {
  //const profile_back = require('./image/projectback.png');
  const [p1,setp1] = useState(false)
  let today = new Date(),
  hour = today.getHours();
  let wish;
  console.log(today);
  console.log(hour);
  if(3<hour && hour<12)
  {
      wish = 'Good morning'
  }
  else if(12<=hour && hour<15){
    wish = 'Good after noon'
  }
  else if(15<=hour && hour<22){
    wish = 'Good Evening'
  }
  else{
    wish = 'Hello'
  }
  console.log(wish);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      setp1(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='hello_main'>
      <img className='P_Main_img' src={profileback} alt=""></img>
      <img className='P_sec_img' src={profilefront} alt="" ></img>
    <div className='hello'>
       
      <Row >
        <Col lg={{ span: 8, offset: 1 }} md={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 4 }} >
        <MovingText
  type="flipFromTop"
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease-in"
  iteration="1"
  fillMode="forwards">
        <p className='p_wish'>{wish},</p>
        </MovingText>
      { p1 &&(
        <MovingText
  type="flipFromTop"
  
  duration="2000ms"
  delay="0s"
  direction="normal"
  timing="ease-in"
  iteration="1"
  fillMode="forwards">
       <p> I'am Sreejith R</p>
       </MovingText>
      )}
       </Col>
       </Row>

    </div>
   
    </div>
  )
}

export default Hello