import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Container } from 'react-bootstrap'
import getBeaches from '../api/getBeaches'
import Search from './Search'
import ShowResults from './ShowResults'

const App = () => {
  const [beachSearch, setBeachSearch] = useState('')
  const [beaches, setBeaches] = useState([])
  const [beachList, setBeachList] = useState([])

  useEffect(() => {
    const setup = async () => {
      const response = await getBeaches()
      setBeaches(response)
    }
    setup()
  }, [])

  useEffect(() => {
    if (beachSearch === '')
      return
    console.log('here')
    const newBeachList = beaches.filter(beach => beach.NameMobileWeb.toLowerCase().includes(beachSearch))
    setBeachList(newBeachList)
    console.log(newBeachList)
  }, [beachSearch])


  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>My Hackathon Project</Navbar.Brand>
      </Navbar> 
      <Container>
        <Search setBeachSearch={setBeachSearch} />
        <br />
        {beachSearch.length ? 
          <p>Showing results for {beachSearch}</p> :
          ''
        }
        <ShowResults beachList={beachList} />
      </Container>
    </div>

  )
}

export default App