import React, { useState } from "react"
import logo from "../../../assets/logo.svg"
import { Container, Form, Nav, Navbar } from "react-bootstrap"
import "./Header.css"
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    const handelSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${e.target.querySelector("input").value}`)
    }
    const [home, setHome] = useState(true)
    const handelToggel = () => {
        setHome(!home)
    }

    return (
        <div className="header">
            <Navbar expand="lg">
                <Container className="d-flex flex-row">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                        <Nav style={{ maxHeight: "100px" }} navbarScroll>
                            <Link to="/" className={`me-5 ${home ? "active" : ""}`} onClick={handelToggel}>
                                Home
                            </Link>
                            <Link to="/movies" className={`${home ? "" : "active"}`} onClick={handelToggel}>
                                Movies
                            </Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={handelSearch}>
                            <Form.Control placeholder="Search for a movies" className="me-2" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
