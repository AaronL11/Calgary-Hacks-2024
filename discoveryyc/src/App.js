import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import TopBar from './Components/TopBar';
import MenuPage from './pages/menuPage';
// import BottomNavbar from './Components/BottomBar';

function App() {
  return (
    <ChakraProvider>
      <TopBar/>
      <MenuPage/>
      {/* <BottomNavbar/> */}
    </ChakraProvider>
  )
}

export default App;
