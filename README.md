# Luxor Component Library

> React UI Component Library

[![NPM](https://img.shields.io/npm/v/@jmoussa/luxor-component-library)](https://www.npmjs.com/package/@jmoussa/luxor-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)[![Build Status](https://img.shields.io/travis/com/jmoussa/luxor-component-library?label=Build%20Status)](https://travis-ci.com/github/jmoussa/luxor-component-library/builds/) [![Downloads/Week](https://img.shields.io/npm/dw/@jmoussa/luxor-component-library)](https://www.npmjs.com/package/@jmoussa/luxor-component-library)
## Install

```bash
npm install --save luxor-component-library
```

## Usage

```jsx
import React, { Component } from 'react'

import { Box } from 'luxor-component-library'
import 'luxor-component-library/dist/index.css'

class Example extends Component {
  render() {
    return (
      <Box padding='medium' margin='small' roundedCorners>
        Info in the box
      </Box>
    )
  }
}
```

## Weather Widget

A note on the weather widget in that it requires an RapidAPI API key to function. Store the API key in an environment variable called `REACT_APP_RAPIDAPI_KEY` either with an export statement or in a `.env` file in the root folder.

## Demo

To run the live interactive demo. Pull down the source code from github and navigate to `example/` and run:

```bash
>> npm install
>> npm start
```

**NOTE: If you do not have the package installed locally you will need to run the same calls from the root folder in a separate terminal**

### This is an ongoing project so please be patient :)

# Screenshots

![T1](./screenshots/1.jpg?raw=true)
![T2](./screenshots/2.jpg?raw=true)
![Boxes](./screenshots/Boxes.jpg?raw=true)
![Weather](./screenshots/weather.jpg?raw=true)

## License

MIT © [jmoussa](https://github.com/jmoussa)
