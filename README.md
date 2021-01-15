# Luxor-component-library

> React UI Component Library 

[![NPM](https://img.shields.io/npm/v/luxor-component-library.svg)](https://www.npmjs.com/package/@jmoussa/luxor-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## Demo
To run the live interactive demo. Pull down the source code from github and navigate to `example/` and run:

```bash
>> npm install
>> npm start
```

__NOTE: If you do not have the package installed locally you will need to run the same calls from the root folder in a separate terminal__


## License

MIT © [jmoussa](https://github.com/jmoussa)
