import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Text, Flex } from '@chakra-ui/react';
import theme from "../Theme"

export default function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:theme.colors.brand.pink}}>
      <Container >
        <Navbar.Brand href="/" style={{margin:3, justifyContent:'center', alignItems:'center'}}>
            <img title="logo" src={require("../Assets/DiscoverYYC_logo.png")} style={{height:75, margin:"auto"}}/>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}