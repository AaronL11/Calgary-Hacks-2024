import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import TopBar from './Components/TopBar';
import MenuPage from './pages/menuPage';

function App() {
  return (
    <ChakraProvider>
      <TopBar/>
      <MenuPage/>
    </ChakraProvider>
  )
}

export default App;
