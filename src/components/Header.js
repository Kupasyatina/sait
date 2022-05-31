import React, { Component } from 'react'
import { Button, ButtonGroup, Container, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom';

import logo from './logo192.png';

import Home from '../pages/Home';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contacts from '../pages/Contacts';


export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> АТОМ
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/"> Home</Nav.Link>
                                <Nav.Link href="/about"> About us</Nav.Link>
                                <Nav.Link href="/contats"> Contacts</Nav.Link>
                                <Nav.Link href="/blog"> Blog</Nav.Link>
                            </Nav>
                            <Form >
                                <FormControl
                                    type="text"
                                    placeholder="Searsh"
                                    className="mr-sm-2"
                                />
                                <Button variavt="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div style={{ marginTop: 100 }}>
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contats" element={<Contacts />} />
                        <Route path="blog" element={<Blog assa={1233} />} />

                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
