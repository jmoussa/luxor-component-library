import React, { Component } from 'react'
import { Box } from '../box/Box'
import { Row } from '../row/Row'
import { theme as defaultTheme } from '../../utils/theme'
import { API_KEY } from '../../config/local'
import axios from 'axios'

class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.state = { weather: {}, isLoading: false }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: { q: 'new york city,us', lang: 'English', units: 'imperial' },
      headers: {
        'access-control-allow-origin': '*',
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    }
    axios
      .request(options)
      .then((response) => {
        this.setState({ weather: response.data, isLoading: false })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    const { isLoading, weather } = this.state
    if (isLoading) {
      return <h2>Loading ...</h2>
    } else {
      let city, currentTemp, hi, lo, humidity, feelsLike

      if (weather && weather.main) {
        city = weather.name || undefined
        currentTemp = weather.main.temp || undefined
        hi = weather.main.temp_max || undefined
        lo = weather.main.temp_min || undefined
        humidity = weather.main.humidity || undefined
        feelsLike = weather.main.feels_like || undefined
      }
      return (
        <Box
          textAlign='center'
          padding='medium'
          roundedCorners
          style={{ color: defaultTheme.palette.common.white }}
          backgroundColor={defaultTheme.palette.secondary.main}
        >
          <h1>{city}</h1>
          <h1>{currentTemp} &deg;F</h1>
          <h1>Feels like {feelsLike} &deg;F</h1>
          <Row>
            <Box>
              <h2>High: {hi} &deg;F</h2>
            </Box>
            <Box>
              <h2>Low: {lo} &deg;F</h2>
            </Box>
            <Box>
              <h2>Humidity: {humidity} %</h2>
            </Box>
          </Row>
        </Box>
      )
    }
  }
}

export default WeatherWidget
