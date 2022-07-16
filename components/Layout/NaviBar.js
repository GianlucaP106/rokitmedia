import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from "react";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';

import Link from "next/link";
// import goingvoipLogo from "/goingvoipLogo.png";


export default function Navibar() {

    const [isShown, setIsShown] = useState(false);

    function showDropDown() {
        setIsShown(!isShown);
    }

    function isShowing(state) {
        if (!state) return "noDisplay";
    }

    return(
        <section>
            <div style={{boxShadow: "0px 4px 2px 0px #c6c6c6"}}>
                <Navbar collapseOnSelect expand="lg" className="bgColor" variant="light">
                    <Container>
                        <Navbar.Brand href="/"><img src="/assets/logos/rokitLogo.png" className="" alt="" height="60" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ms-auto">
                                <Nav.Link className="text-black navPadFix navPosFix" style={{display: "flex", alignItems: "center"}} href="">Home</Nav.Link>
                                {/* <Nav.Link className="text-black navPadFix navPosFix" style={{display: "flex", alignItems: "center"}} href="">Services</Nav.Link> */}
                                {/* <Nav.Link className="text-black navPadFix" style={{display: "flex", alignItems: "center"}} href="">Industries</Nav.Link> */}
                                
                                <Nav className="text-black navPadFix navPosFix" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                                    <button className="" type="button" onClick={showDropDown}>Services</button>
                                    <div className={"dropDownMenuShowed " + isShowing(isShown)}>
                                        <a>hello</a>
                                        <a>bro</a>
                                    </div>
                                </Nav>
                                {/* <NavDropdown className="centerItemV navPadFix navPosFix" title="Services" renderMenuOnMount={true}>
                                    <NavDropdown.Item className="dropDownElements" href="">Action</NavDropdown.Item>
                                    <NavDropdown.Item className="dropDownElements" href="">Another action</NavDropdown.Item>
                                    <NavDropdown.Item className="dropDownElements" href="">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropDownElements" href="">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link className="text-black navPadFix navPosFix" href="" style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}>About Us </Nav.Link>
                                <Nav.Link className="text-black navPadFix navPosFix" href="" style={{paddingBottom: "10px"}}>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href=""><button className="purpleButton"><p style={{margin: "0"}} className="fontSize24 text-white">Get Started</p></button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </section>
    );
}