import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar bg='dark' variant='dark' expand='lg'>
                        <Container>
                            <Navbar.Brand as={Link} to='/' href='#home'>Hexagon Render Test</Navbar.Brand>
                            <Navbar.Toggle aria-controls='navbarScroll' />
                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Nav
                                    className='mr-auto my-2 my-lg-0'
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='/other'>Other</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/other' element={<Other />} />
                    </Routes>
                </div>
            </Router>
        );
    };
};