import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { getWeather } from '../api/apiCalls'

const DisplaySelected = ({ selectedBeach }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    const getData = async () => {
      const response =  await getWeather(selectedBeach.LATITUDE, selectedBeach.LONGITUDE)
      setWeather(response)
    }
    getData()
  }, [])

  const goodToSurf = () => {
    let recommendation = ''
    if (weather.wind.speed < 5)
      recommendation = 'Winds are not strong enough.'
    else if (weather.wind.speed <= 10)
      recommendation = 'Good to surf'
    else 
      recommendation = 'Winds to high. No Surfing recommended'
    return recommendation
  }

  const surfConditions = () => {
    return (
      <>
        <Col>
          Temperature: {weather.main.temp} <span>&#8457;</span> - {weather.weather[0].description}
        </Col>
        <Col>
          Wind speed: {weather.wind.speed} mph - {goodToSurf()}
        </Col>
      </>
    )
  }

  return (
    <div>
      <h3>{selectedBeach.NameMobileWeb}</h3>
      <Row>
        <Col>
          Phone Number: {selectedBeach.PHONE_NMBR.length ? selectedBeach.PHONE_NMBR : '?'}
        </Col>
        <Col>
          Parking: {selectedBeach.PARKING.length ? selectedBeach.PARKING : '?'}
        </Col>
      </Row>
      <br />
      <Row>
        {Object.keys(weather).length ? surfConditions() : '' }
      </Row>
    </div>
  )
}

export default DisplaySelected