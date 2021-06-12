import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ShowResults = ({ beachList }) => {
  const selectedBeach = id => {
    console.log(id)
  }
  const renderedList = () => {
    return beachList.map( beach => {
      return (
        <ListGroup.Item style={{ cursor: 'pointer' }} key={beach.ID} onClick={() => selectedBeach(beach.ID)}>
          <h3>{beach.NameMobileWeb}</h3>
          <p>{beach.DescriptionMobileWeb}</p>
        </ListGroup.Item>
      )
    })
  }
  return (
    <div>
      <ListGroup>
        {renderedList()}
      </ListGroup>
    </div>
  )
}

export default ShowResults
