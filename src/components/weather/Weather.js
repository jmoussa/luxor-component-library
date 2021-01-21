import React, { Component } from 'react'
import { Box } from '../box/Box'
import { Row } from '../row/Row'
import { theme as defaultTheme } from '../../utils/theme'
import axios from 'axios'
import { config } from '../../config/dev'
import styles from './weather.css'
class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    this.state = { weather: {}, isLoading: false }
  }

  forceUpdateHandler() {
    this.forceUpdate()
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const city = this.props.city || 'los angeles,us'
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: { q: city, lang: 'English', units: 'imperial' },
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
        setTimeout(
          function () {
            this.forceUpdateHandler()
          }.bind(this),
          2000
        )
      })
  }

  render() {
    const { isLoading, weather } = this.state
    if (isLoading) {
      return <h2>Loading ...</h2>
    } else {
      let city,
        currentTemp,
        hi,
        lo,
        humidity,
        feelsLike,
        description,
        weatherBackgroundClass

      if (weather && weather.main) {
        city = weather.name || undefined
        currentTemp = weather.main.temp || undefined
        hi = weather.main.temp_max || undefined
        lo = weather.main.temp_min || undefined
        humidity = weather.main.humidity || undefined
        feelsLike = weather.main.feels_like || undefined
      }

      if (weather && weather.weather) {
        // console.log(weather) // useful for adding new features
        const s = weather.weather[0].description || undefined
        description = s.charAt(0).toUpperCase() + s.slice(1)
        if (description.includes('cloud')) {
          weatherBackgroundClass = styles.cloudy
        } else if (description.includes('sun')) {
          weatherBackgroundClass = styles.sunny
        } else if (description.includes('snow')) {
          weatherBackgroundClass = styles.snowy
        } else if (description.includes('rain')) {
          weatherBackgroundClass = styles.rainy
        } else {
          weatherBackgroundClass = styles.bg
        }
      }
      return (
        <Box
          roundedCorners
          className={styles.container}
          padding='medium'
          {...this.props}
        >
          <div className={weatherBackgroundClass} />
          <Box
            textAlign='center'
            padding='none'
            paddingX='small'
            margin='xlarge'
            roundedCorners
            color={defaultTheme.palette.common.white}
            style={{ fontWeight: 'bold', zIndex: '2' }}
            className={styles.overlay}
          >
            <h1>{city}</h1>
            <h1>{currentTemp}&deg;F</h1>
            <h1>{description}</h1>
            <br />
            <h2>Feels like: {feelsLike}&deg;F</h2>
            <br />
            <Row space='small' textAlign='center'>
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
