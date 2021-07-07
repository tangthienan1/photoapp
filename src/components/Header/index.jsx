import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './header.scss'
function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a className="header__link header__title"
                        href="https://www.facebook.com/thienan.tang.99/"
                        target="_blank"
                        rel="noreferrer">
                            Thien An App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink 
                        exact 
                        className="header__link" 
                        to="/photos" 
                        activeClassName="header__link--active">
                            Suck Redux
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

Header.propTypes = {

}

export default Header;

