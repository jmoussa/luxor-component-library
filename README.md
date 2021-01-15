# Luxor Component Library

> React UI Component Library 

[![NPM](https://img.shields.io/npm/v/@jmoussa/luxor-component-library)](https://www.npmjs.com/package/@jmoussa/luxor-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save luxor-component-library
```

## Usage

```jsx
import React, { Component } from 'react'

import {Box} from 'luxor-component-library'
import 'luxor-component-library/dist/index.css'

class Example extends Component {
  render() {
    return <Box padding='medium' margin='small' roundedCorners>Info in the box</Box>
  }
}
```

## Weather Widget

A note on the weather widget in that it requires an API_KEY to be exported from a local.js file in `src/config/local.js`. API Key should go belong to a valid RapidAPI account.

## Demo
To run the live interactive demo. Pull down the source code from github and navigate to `example/` and run:

```bash
>> npm install
>> npm start
```

__NOTE: If you do not have the package installed locally you will need to run the same calls from the root folder in a separate terminal__


### This is an ongoing project so please be patient :)

## License

MIT © [jmoussa](https://github.com/jmoussa)
