import React from 'react'

import {
  Button,
  Box,
  defaultTheme,
  Row,
  Stack,
  spacing,
  fontSizes
} from 'vier-component-library'
import 'vier-component-library/dist/index.css'

const App = () => {
  const header_styling = {
    fontFamily: defaultTheme.typography.primaryFontFamily,
    color: defaultTheme.palette.common.white
  }
  const paragraph_styling = {
    textAlign: 'left',
    padding: spacing.large,
    margin: spacing.large,
    fontFamily: defaultTheme.typography.primaryFontFamily,
    fontSize: fontSizes.medium,
    color: defaultTheme.palette.common.white
  }
  const title_styling = {
    ...header_styling,
    color: defaultTheme.palette.common.white,
    fontSize: fontSizes.header,
    paddingBottom: 'medium'
  }
  const sub_header_styling = {
    fontFamily: defaultTheme.typography.secondaryFontFamily,
    fontSize: fontSizes.sub_header,
    color: defaultTheme.palette.secondary.light
  }
  return (
    <Stack
      // CONTAINER
      backgroundColor={defaultTheme.palette.grey[100]}
    >
      <Box
        // HEADER Container
        textAlign='center'
        paddingY='xxlarge'
        backgroundColor={defaultTheme.palette.secondary.main}
      >
        <h1 style={title_styling}>Luxor</h1>
        <h1 style={sub_header_styling}>Another Component Library</h1>
      </Box>
      <Row
        // SINGLE ROW
        margin='large'
        padding='medium'
        paddingTop='xlarge'
        space='medium'
      >
        <Box
          // INTRO Panel
          padding='small'
          paddingTop='medium'
          paddingBottom='medium'
          marginX='medium'
          marginY='medium'
          display='block'
          textAlign='center'
          roundedCorners
          backgroundColor={defaultTheme.palette.grey[300]}
        >
          <h1 style={header_styling}>
            This is a Guide to the Luxor Component Library
          </h1>
          <Row
            margin='large'
            padding='medium'
            paddingTop='xlarge'
            space='medium'
          >
            <Box
              padding='small'
              paddingTop='medium'
              paddingBottom='medium'
              marginX='medium'
              marginY='medium'
              display='block'
              textAlign='center'
            >
              <p style={paragraph_styling}>
                Funny enough, I'm creating the visual component library while
                I'm composing this guide so buckle up kids it's going to be a
                bumpy ride. This visual component library is designed to have a
                flexible way to show and to define css poperties in react
                components as props. There are 4 basic components, and these 4
                are the building blocks for other more complex components in the
                library.
              </p>
            </Box>
            <Box
              padding='small'
              paddingTop='medium'
              paddingBottom='medium'
              marginX='medium'
              marginY='medium'
              display='block'
              textAlign='center'
            >
              <Stack space='medium' style={{ listStyleType: 'none' }}>
                <Box
                  roundedCorners
                  padding='small'
                  backgroundColor={defaultTheme.palette.secondary.light}
                  class='listbox'
                >
                  <h2>Button</h2>
                </Box>
                <Box
                  roundedCorners
                  padding='small'
                  backgroundColor={defaultTheme.palette.secondary.light}
                  class='listbox'
                >
                  <h2>Box</h2>
                </Box>
                <Box
                  roundedCorners
                  padding='small'
                  backgroundColor={defaultTheme.palette.secondary.light}
                  class='listbox'
                >
                  <h2>Row</h2>
                </Box>
                <Box
                  roundedCorners
                  padding='small'
                  backgroundColor={defaultTheme.palette.secondary.light}
                  class='listbox'
                >
                  <h2>Stack</h2>
                </Box>
              </Stack>
            </Box>
          </Row>
        </Box>
      </Row>
      <Row padding='xlarge' paddingTop='medium' space='medium'>
        <Box
          padding='small'
          paddingTop='medium'
          paddingBottom='medium'
          marginX='medium'
          marginY='medium'
          display='block'
          textAlign='center'
          roundedCorners
          backgroundColor={defaultTheme.palette.grey[300]}
        >
          <h1 id='button-header' style={header_styling}>
            Buttons
          </h1>
          <p style={paragraph_styling}>
            Buttons have 4 main properties that give you an array of options.
            <ul style={{ listStyleType: 'circle' }}>
              <li>Variant</li>
              <li>Color</li>
              <li>Size</li>
              <li>Text</li>
            </ul>
            If you are looking to add interactivity, the <code>onClick</code>{' '}
            property will allow you to hook it up to a function
          </p>
        </Box>
        <Box
          padding='small'
          paddingTop='medium'
          paddingBottom='medium'
          marginX='medium'
          marginY='medium'
          display='block'
          textAlign='center'
          roundedCorners
          backgroundColor={defaultTheme.palette.grey[300]}
        >
          <Row space='large' paddingRight='medium'>
            <Stack space='large' paddingY='xxlarge'>
              <Box>
                <Button
                  variant='solid'
                  color='primary'
                  size='small'
                  text='Solid Small Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='solid'
                  color='secondary'
                  size='medium'
                  text='Solid Small Secondary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='primary'
                  size='small'
                  enableElevation
                  text='Outline Small Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='secondary'
                  size='small'
                  text='Outline Small Secondary Button'
                />
              </Box>
            </Stack>
            <Stack space='large' paddingY='xlarge'>
              <Box>
                <Button
                  variant='solid'
                  color='primary'
                  size='medium'
                  text='Solid Medium Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='solid'
                  color='secondary'
                  size='medium'
                  text='Solid Medium Secondary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='primary'
                  size='medium'
                  enableElevation
                  text='Outline Medium Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='secondary'
                  size='medium'
                  text='Outline Medium Secondary Button'
                />
              </Box>
            </Stack>
            <Stack space='medium' paddingY='small'>
              <Box>
                <Button
                  variant='solid'
                  color='primary'
                  size='large'
                  enableElevation
                  text='Solid Large Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='solid'
                  color='secondary'
                  size='large'
                  enableElevation
                  text='Solid Large Secondary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='primary'
                  size='large'
                  enableElevation
                  text='Outline Large Primary Button'
                />
              </Box>
              <Box>
                <Button
                  variant='outline'
                  color='secondary'
                  size='large'
                  enableElevation
                  text='Outline Large Secondary Button'
                />
              </Box>
            </Stack>
          </Row>
        </Box>
      </Row>
      <Row padding='xlarge' paddingTop='medium' space='medium'>
        <Box
          padding='small'
          paddingBottom='medium'
          marginX='medium'
          marginY='medium'
          display='block'
          textAlign='center'
          roundedCorners
          backgroundColor={defaultTheme.palette.grey[300]}
        >
          <h1 id='button-header' style={header_styling}>
            Boxes
          </h1>
          <p style={paragraph_styling}>
            Boxes are the fundamental visual and container components
            <br />
            <br />
            <code>Properties:</code>
            <ul style={{ listStyleType: 'circle' }}>
              <li>padding (X|Y|Top|Bottom|Left|Right)</li>
              <li>margin (X|Y|Top|Bottom|Left|Right)</li>
              <li>position</li>
              <li>top</li>
              <li>bottom</li>
              <li>left</li>
              <li>right</li>
              <li>backgroundColor</li>
              <li>backgroundImage</li>
              <li>textAlign</li>
              <li>width</li>
              <li>display</li>
              <li>roundedCorners</li>
              <li>onClick</li>
              <li>theme</li>
              <li>display</li>
              <li>textAlign</li>
              <li>roundedCorners</li>
              <li>
                and can be extended to support any other native CSS properties
              </li>
            </ul>
            <br />
            <br />
            If you are looking to add interactivity, the <code>
              onClick
            </code>{' '}
            property will allow you to hook it up to a function
          </p>
        </Box>
        <Box
          padding='small'
          paddingBottom='medium'
          marginX='medium'
          marginY='medium'
          display='block'
          textAlign='center'
          roundedCorners
          backgroundColor={defaultTheme.palette.grey[300]}
        >
          <Stack
            padding='xxlarge'
            textAlign='center'
            space='medium'
            style={{ listStyleType: 'none' }}
          >
            <Box backgroundColor={defaultTheme.palette.primary.main}>
              Box with no properties set except backgroundColor set to the
              primary main color
            </Box>
            <Box
              padding='small'
              roundedCorners
              backgroundColor={defaultTheme.palette.secondary.light}
            >
              Box with <code>padding</code>, <code>margin</code>,
              roundedCorders, and backgroundColor set to the primary main color.
            </Box>
          </Stack>
        </Box>
      </Row>
    </Stack>
  )
}

export default App
