import React from 'react'
import PropTypes from 'prop-types'
import { Col, Container, Row } from 'reactstrap'

function Footer(props) {
    return (
        <div className="container-fluid">
            <Row>
                <Col>
                    <div className="about">
                        <h1>About</h1>
                        <p></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer

