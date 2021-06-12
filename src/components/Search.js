import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Search = ({ setBeachSearch }) => {
  const [value, setValue] = useState('')
  const onSubmit = event => {
    event.preventDefault()
    setBeachSearch(value)
    setValue('')
  }
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Search for a beach name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Santa Monica" 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}

export default Search