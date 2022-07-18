import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from "react-bootstrap/Collapse";

import { useState } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';

import Link from "next/link";
// import goingvoipLogo from "/goingvoipLogo.png";


export default function Navibar() {

    const [open, setOpen] = useState(false);

    return(
        
        <div className="ourNavbar" style={{boxShadow: "0px 4px 2px 0px #c6c6c6"}}>
            <Navbar collapseOnSelect expand="lg" className="bgColor" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src="/assets/logos/rokitLogo.png" className="" alt="" height="60" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link className="text-white navPadFix navPosFix" style={{display: "flex", alignItems: "center"}} href="">Home</Nav.Link>
                            <NavDropdown className="centerItemV navPadFix navPosFix" title="Services" id="dropdownNav">
                                <NavDropdown.Item className="dropDownElements" href="">Action</NavDropdown.Item>
                                <NavDropdown.Item className="dropDownElements" href="">Another action</NavDropdown.Item>
                                <NavDropdown.Item className="dropDownElements" href="">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className="dropDownElements" href="">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navPadFix navPosFix" href="" id="collapseMobile">
                                <button className={"servciesCollapseButton"} style={{color: "white"}} aria-controls="example-collapse-text" aria-expanded={open} onClick={() => setOpen(!open)}>
                                    Services
                                </button>
                            </Nav.Link>
                            <Collapse in={open} id="collapseMobile">
                                <div className="collapseTextMobile" id="example-collapse-text">
                                    <a href="">Web Development</a>
                                    <a href="">UI/UX Design</a>
                                    <a href="">Marketing</a>
                                </div>
                            </Collapse>
                            <Nav.Link className="text-white navPadFix navPosFix" href="" style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}>About Us </Nav.Link>
                            <Nav.Link className="text-white navPadFix navPosFix" href="" style={{paddingBottom: "10px"}}>Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href=""><button className="purpleButton"><p style={{margin: "0"}} className="fontSize24 text-white">Get Started</p></button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}