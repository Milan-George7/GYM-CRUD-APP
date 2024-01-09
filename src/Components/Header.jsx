import React from 'react'
import { Badge, Container, Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar style={{zIndex:'1',background:'black'}} expand='lg' className=" position-fixed top-0 w-100 mb-5">
    <Container>
      <Navbar.Brand  style={{color:'white',fontSize:'25px'}}>
     <Link to={'/'} style={{textDecoration:'none',color:'White'}}>
     <i class="fa-solid fa-dumbbell me-3" style={{height:'26px'}}></i>
          FitnessFreaks
     </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link className='btn border rounded me-5'>
          <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white'}}>
           Home
          </Link>
        </Nav.Link>
        <Nav.Link className='btn border rounded'>
          <Link to={'/history'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white'}}>
            Watch History
          </Link>
        </Nav.Link>
        

      </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  )
}

export default Header