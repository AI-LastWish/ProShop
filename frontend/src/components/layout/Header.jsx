import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className={`ms-auto my-2 my-lg-0 ${styles.test}`}
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <LinkContainer to='/cart'>
                <Nav.Link><i className="fas fa-shopping-cart"> Cart</i></Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className="fas fa-user"> Sign In</i></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
