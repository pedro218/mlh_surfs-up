import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DisplaySelected = ({ selectedBeach }) => {

  return (
    <div>
      <Row>
        <Col>
          Name: {selectedBeach.NameMobileWeb}
        </Col>
        <Col>
          Area: 
        </Col>
      </Row>
    </div>
  )
}

export default DisplaySelected