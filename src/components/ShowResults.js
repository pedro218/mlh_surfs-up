import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ShowResults = ({ beachList, setSelectedBeach }) => {

  const renderedList = () => {
    return beachList.map( beach => {
      return (
        <ListGroup.Item style={{ cursor: 'pointer' }} key={beach.ID} onClick={setSelectedBeach}>
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
