import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { getBeaches } from '../api/apiCalls'

import Header from './Header'
import Search from './Search'
import ShowResults from './ShowResults'
import DisplaySelected from './DisplaySelected'

const App = () => {
  const [beachSearch, setBeachSearch] = useState('')
  const [beaches, setBeaches] = useState([])
  const [beachList, setBeachList] = useState([])
  const [selectedBeach, setSelectedBeach] = useState({})
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
    setSelectedBeach({})
    const newBeachList = beaches.filter(beach => beach.NameMobileWeb.toLowerCase().includes(beachSearch))
    setBeachList(newBeachList)
  }, [beachSearch])

  const setUpSelected = id => {
    console.log(id)
    const selected = beachList.filter(beach => beach.ID === id)
    setSelectedBeach(selected[0])
    setBeachSearch('')
  }

  const renderResults = () => {
    if (beachSearch === '') 
      return ''
    return <ShowResults beachList={beachList} setSelectedBeach={setUpSelected}/>
  }

  return (
    <div>
      <Header />
      <Container>
        <Search setBeachSearch={setBeachSearch} />
        <br />
        {beachSearch.length ? 
          <i>Showing results for <strong>{beachSearch}</strong></i> : ''
        }
        {!Object.keys(selectedBeach).length ?
          renderResults() :
          <DisplaySelected selectedBeach={selectedBeach} />
        }
      </Container>
    </div>

  )
}

export default App