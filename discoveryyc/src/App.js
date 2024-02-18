import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import TopBar from './Components/TopBar';
import HomePage from './pages/homePage';

function App() {
  return (
    <ChakraProvider>
      <TopBar/>
      <HomePage/>
    </ChakraProvider>
  )
}

export default App;
