import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const Search = ({ setBeachSearch }) => {
  const [value, setValue] = useState('')
  const onSubmit = event => {
    event.preventDefault()
    setBeachSearch(value.toLowerCase())
    setValue('')
  }
  return (
    <Form inline onSubmit={onSubmit}>
      <Form.Label>Search for a beach</Form.Label>
      <InputGroup>
        <Form.Control
          type="text"
          id="inlineFormInput"
          placeholder="Ex. Santa Monica"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <InputGroup.Append>
          <Button type="submit" variant="outline-success">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default Search