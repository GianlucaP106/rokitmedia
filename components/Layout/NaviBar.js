import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Link from "next/link";
// import goingvoipLogo from "/goingvoipLogo.png";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Navibar() {

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
                                <NavDropdown className="centerItemV navPadFix navPosFix" title="Services" id="collasible-nav-dropdown">
                                    <NavDropdown.Item className="dropDownElements" href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item className="dropDownElements" href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item className="dropDownElements" href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropDownElements" href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="text-black navPadFix navPosFix" href="" style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}>About Us </Nav.Link>
                                <Nav.Link className="text-black navPadFix navPosFix" href="" style={{paddingBottom: "10px"}}>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><button className="purpleButton"><p style={{margin: "0"}} className="fontSize24 text-white">Get Started</p></button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </section>
    );
}