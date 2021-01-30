# Luxor Component Library

> React UI Component Library

[![NPM](https://img.shields.io/npm/v/@jmoussa/luxor-component-library)](https://www.npmjs.com/package/@jmoussa/luxor-component-library) [![build status](https://img.shields.io/travis/com/jmoussa/luxor-component-library?label=Build%20Status)](https://travis-ci.com/github/jmoussa/luxor-component-library/builds/) [![Downloads/Week](https://img.shields.io/npm/dw/@jmoussa/luxor-component-library)](https://www.npmjs.com/package/@jmoussa/luxor-component-library)

## Install

```bash
npm install --save luxor-component-library
```

## The Design Principles

### Container Based Design

The concept behind this design is using visual containers for everything. 
Whether it be a Box for simple content or a Stack/Row to align multiple Boxes of content vertically/horizontally respectively. 

The button component and weather widget are the beginning of a custom component library.

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

---

## Demo

To run the live demo (screenshots below). Pull down the source code from github and navigate to `example/` and run:

```bash
>> npm install
>> npm start
```
**NOTE: If you do not have the package installed locally you will need to run the same calls from the root folder in a separate terminal**

---

## Development

- Fork the github repo
- Setup (RapidAPI API key needed for weather module):
```bash
>> npm install
>> export REACT_APP_RAPIDAPI_KEY='...' 
```
- Develop
- Send a PR

--- 

## TODO

- Navbar component
- Dropdown component
- Text input component
- Slider input component

---
# Screenshots

![T1](./screenshots/1.jpg?raw=true)
![T2](./screenshots/2.jpg?raw=true)
![Boxes](./screenshots/Boxes.jpg?raw=true)
![Weather](./screenshots/weather.jpg?raw=true)

## License

MIT © [jmoussa](https://github.com/jmoussa)
