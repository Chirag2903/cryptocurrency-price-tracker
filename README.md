                                                  CRYPTOCURRENCY PRICE TRACKER 


Built Using React, CoingeckoApi, Chakkra Ui, Chartjs

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Installation
$ yarn add @chakra-ui/react @emotion/react @emotion/styled @chakra-ui/icons framer-motion chakra-ui-carousel

# or

$ npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion chakra-ui-carousel


## Prerequisites
After installing above libraries, you need to set up the ChakraProvider at the root of your application. This can be either in your index.jsx, index.tsx or App.jsx depending on the framework you use.

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}






