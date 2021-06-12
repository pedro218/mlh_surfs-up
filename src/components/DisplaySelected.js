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
          Area: {selectedBeach.GEOGR_AREA}
        </Col>
        <Col>
          Dog Friendly: {selectedBeach.DOG_FRIENDLY.length ? selectedBeach.DOG_FRIENDLY : '?'}
        </Col>
        <Col>
          Campground: {selectedBeach.CAMPGROUND.length ? selectedBeach.CAMPGROUND : '?'}
        </Col>
      </Row>
    </div>
  )
}

export default DisplaySelected