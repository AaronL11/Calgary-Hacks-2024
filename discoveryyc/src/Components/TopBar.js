import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Text, Flex } from '@chakra-ui/react';
import theme from "../Theme"

export default function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" style={{backgroundColor:"#D5B9B2"}}>
      <Container >
        <Navbar.Brand href="/" style={{margin:3, justifyContent:'center', alignItems:'center'}}>
            <img title="logo" src={require("../Assets/DiscoverYYC_logo.png")} style={{height:75, marginLeft: "auto", marginRight:"auto", backgroundColor:"#D5B9B2"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{margin:3, justifyContent:'center', alignItems:'center'}}>
            {/* <Text fontSize={'xl'} fontWeight={'medium'} color={'brand.red'}>DiscoverYYC</Text> */}
            {/* <Text>DiscoverYYC</Text> */}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}