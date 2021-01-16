import React, { Component } from 'react'
import { Box } from '../box/Box'
import { Row } from '../row/Row'
import { theme as defaultTheme } from '../../utils/theme'
import axios from 'axios'
import { config } from '../../config/dev'

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
        'x-rapidapi-key': config.RAPID_API_KEY,
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
          padding='small'
          margin='none'
          roundedCorners
          style={{ color: defaultTheme.palette.common.white }}
          backgroundColor={defaultTheme.palette.secondary.main}
        >
          <Box marginX='xxxlarge' marginY='large'>
            <h1>{city}</h1>
            <h2>Current: {currentTemp}&deg;F</h2>
            <h2>Feels like: {feelsLike}&deg;F</h2>
            <Row space='none' textAlign='center'>
              <Box>
                <h3>High: {hi}&deg;F</h3>
              </Box>
              <Box>
                <h3>Low: {lo}&deg;F</h3>
              </Box>
              <Box>
                <h3>Humidity: {humidity}%</h3>
              </Box>
            </Row>
          </Box>
        </Box>
      )
    }
  }
}

export default WeatherWidget
