import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'



function NavB() {
  return (
    // <div  >

    //   <Row>

    //     <Nav variant="tabs" defaultActiveKey="/home">

    //       <Nav.Item style={{ position: 'relative', left: '1000px', width: '200px' }} >

    //         <Nav.Link href="/home" >Active</Nav.Link>

    //       </Nav.Item>

    //       <Nav.Item style={{ position: 'relative', left: '1000px', width: '200px' }} activeStyle={{
    //         fontWeight: "bold",
    //         color: "blak"
    //       }}>

    //         <Nav.Link eventKey="link-1" activeStyle={{
    //           fontWeight: "bold",
    //           color: "blak"
    //         }}>Option 2</Nav.Link>

    //       </Nav.Item>

    //       <Nav.Item style={{ position: 'relative', left: '1000px', width: '200px' }}>

    //         <Nav.Link eventKey="disabled">
    //           Disabled
    //         </Nav.Link>

    //       </Nav.Item>

    //     </Nav>

    //   </Row>

    // </div>

    <div>

<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
       
      </ul>

    </div>
  </div>
</nav>

    </div>
  )
}

export default NavB