import React, { useState } from 'react'
import './Project.css'
import netflix from './image/netflix.png'
import resturent from './image/resturent.png'
import { Col, Row } from 'react-bootstrap'
import { Visible } from 'react-grid-system'



function Projects() {

  const [proImg,setproImg] = useState(netflix);
  return (
    <div className='projects'>
      <h1 style={{textAlign:'center', marginTop:'2rem', marginBottom:'2rem'}}>Projects</h1>
     
      <div className=''>
        <Visible xxl>
      <Row>
        <Col >
    
      <div className='single_pro' onMouseEnter={()=>setproImg(netflix)} >
        <img className='p_img' src={netflix}></img>
      <p>Netflix clone Webpage</p>
      </div>
      </Col>
      <Col>
      <div className='single_pro'  onMouseEnter={()=>setproImg(resturent)}>
      <img className='p_img' src={resturent}  ></img>
      <p >Restaurant Listing Web</p>
      </div>
   
      </Col>
      {/* <Col>
      <div className='pro_img_previw' >
      
      <img className='pro_big_img' src={proImg} ></img>
      </div>
      </Col> */}
      </Row>
      </Visible>
      <Visible xl>
      <Row>
       
     
      <Col>
      <div className='single_pro ' onMouseEnter={()=>setproImg(netflix)} >
        <img className='p_img' src={netflix}   ></img>
      <p>Netflix clone Webpage</p>
      </div>
      </Col>
      <Col>
      <div className='single_pro'  onMouseEnter={()=>setproImg(resturent)}>
      <img className='p_img' src={resturent} ></img>
      <p >Restaurant Listing Web</p>
      </div>
      </Col>
    
      
      {/* <Col>
      <div className='pro_img_previw' >
      
      <img className='pro_big_img'  src={proImg} ></img>
      </div>
      </Col> */}
      </Row>
      </Visible>

      <Visible lg>
      <Row>
       
      
      <Col >
      <div className='single_pro' onMouseEnter={()=>setproImg(netflix)} >
        <img className='p_img' src={netflix} ></img>
      <p>Netflix clone Webpage</p>
      </div>
      </Col>
      <Col >
      <div className='single_pro'  onMouseEnter={()=>setproImg(resturent)}>
      <img className='p_img' src={resturent}  ></img>
      <p >Restaurant Listing Web</p>
      </div>
      </Col>
      
      
      </Row>
      {/* <Row>
      <Col>
      <div className='pro_img_previw'  style={{ width:'100vw',height:'50vw'}}>
    
      <img className='pro_big_img' style={{width:'90vw' , height:'45vw'}} src={proImg} ></img>
      </div>
      </Col>
      </Row> */}
      </Visible>
      
      <Visible md>
      <Row>
       
      
      <Col >
      <div className='single_pro' onMouseEnter={()=>setproImg(netflix)} >
        <img className='p_img' src={netflix}></img>
      <p>Netflix clone Webpage</p>
      </div>
      </Col>
      <Col>
      <div className='single_pro'  onMouseEnter={()=>setproImg(resturent)}>
      <img className='p_img' src={resturent} ></img>
      <p >Restaurant Listing Web</p>
      </div>
      </Col>
      
      
      </Row>
      {/* <Row>
      <Col>
      <div className='pro_img_previw'  style={{ width:'100vw',height:'50vw'}}>
     
      <img className='pro_big_img' style={{width:'90vw' , height:'45vw'}} src={proImg} ></img>
      </div>
      </Col>
      </Row> */}
      </Visible>

      
      <Visible sm>
      <Row >
       
      <center>
      <Col >
      <div className='single_pro' style={{width:'80vw',height:'45vw'}} >
        <img className='p_img' style={{width:'75vw',height:'37vw'}} src={netflix} ></img>
      <p>Netflix clone Webpage</p>
      </div>
      
      <div className='single_pro' style={{width:'80vw',height:'45vw'}} >
      <img className='p_img' style={{width:'75vw',height:'37vw'}} src={resturent}  ></img>
      <p >Restaurant Listing Web</p>
      </div>
      </Col>
      </center>
      
      
      </Row>
      {/* <Row>
      <Col>
      <div className='pro_img_previw'  style={{ width:'100vw',height:'50vw'}}>
      <p>aaaaaa</p>
      </div>
      </Col>
      </Row> */}
      </Visible>
      <Visible xs>
      <Row >
       
      <center>
      <Col >
      <div className='single_pro' style={{width:'90vw',height:'55vw' ,marginBottom:'1rem'}} >
        <img className='p_img' style={{width:'85vw',height:'42vw'}} src={netflix} ></img>
      <p>Netflix clone Webpage</p>
      </div>
      
      <div className='single_pro' style={{width:'90vw',height:'55vw'}} >
      <img className='p_img' style={{width:'85vw',height:'42vw'}} src={resturent}  ></img>
      <p >Restaurant Listing Web</p>
      </div>
      </Col>
      </center>
      
      
      </Row>
      {/* <Row>
      <Col>
      <div className='pro_img_previw'  style={{ width:'100vw',height:'50vw'}}>
      <p>aaaaaa</p>
      </div>
      </Col>
      </Row> */}
      </Visible>
    </div>
    
    </div>
  )
}

export default Projects