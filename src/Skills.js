import React from 'react'
import './Skills.css'
import { Col, Row } from 'react-bootstrap'
import { Visible } from 'react-grid-system';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import html from './image/html.png';
import js from './image/js.png';
import css from './image/css.png';
import react from './image/React.png'


function Skills() {

  const [height, setHeight] = useState(0);
  const [Cover, setCover] = useState(true);
  // const [height2, setHeight2] = useState(0);
  const elementRef = useRef(null);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight);
    function handleWindowResize() {
    setHeight(elementRef.current.offsetHeight);
    }
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

    if('100vw'<'768px'){
        setCover(false);
    }
  }, []);
console.log(height);
// setHeight2(height*2);
console.log(window.innerWidth);

  return (
    <div style={window.innerWidth?{height:  `${height}px`, overflowY:'hidden'}:{height:  `${2*height}px`, overflowY:'hidden'}}>
    <div className='Skills' ref={elementRef} >
      <div className='h_skills'>
        <h1>
            Skills
        </h1>
        

  <Visible xs><Row>
        <Col>
        <br></br>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
       
       <br></br>
       <br></br>
       <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        <br></br>
        <br></br>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        <br></br>
        <br></br>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row>
   

  </Visible>
  <Visible sm><Row>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
       
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row></Visible>
  <Visible md> <Row>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
       
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row></Visible>
  <Visible lg> <Row>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
     
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        </Col>
        <Col>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row></Visible>
  <Visible xl> <Row>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
      
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        </Col>
        <Col>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row></Visible>
  <Visible xxl> <Row>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={react}></img>
        React
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={html}></img>
        </Col>
        <Col>
        <img style={{width:'2.12rem', height:'3rem' }} src={css}></img>
        </Col>
        <Col>
        <img style={{width:'3rem', height:'3rem' }} src={js}></img>
        </Col>
    </Row></Visible>
    {/* {`The height of this element is: ${height}px`} */}

           
        
  </div>
  </div>
  <Visible xxl xl lg md>
  <div className='skills_c d-flex' style={{height: `${height}px`, position:'relative' , bottom : `${height}px`}}>
    <div className='skills_c_l' style={{backgroundColor:'white', width: '50vw', height:`${height}px`}}>
      <p className='skills_p'>Ski</p>
      </div>
    <div className='skills_c_r' style={{backgroundColor:'white', width: '50vw', height:`${height}px`, }}>
      <p className='skills_p' >lls</p>
    </div>

  </div>
  </Visible>

  {/* <div className='skills_c_r' style={{height: `${height}px`, position:'relative' , bottom : `${height2}px`}}>
    <div style={{backgroundColor:'red', width: '50vw', height:`${height}px`, marginLeft:'150vw'}}>

    </div> */}

  {/* </div> */}
    </div>
  )
}

export default Skills