import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Header1 from '../pages/Header1.css';
export const Header = () => {
  return (
    <div>
     
 <Navbar bg="" variant="">
    <Container>
      <Navbar.Brand href="#home" className='navbar-brand'>
    User-Form
      </Navbar.Brand>
      <Nav className="justify-content-end justify-space-between" activeKey="/home">
    <Nav.Item className='list'>
    <Link to='/' className='list'>Home</Link>
    </Nav.Item>
    <Nav.Item className='list'>
    <Link to='/list' className='list'>List</Link>
    </Nav.Item>
    {/* <Nav.Item className='list'>
    <Link to='/contact' className='list'  >Contact</Link>
    </Nav.Item> */}
  </Nav>
    </Container>
  </Navbar>
  <Outlet/>
    </div>
  )
}
