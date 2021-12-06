import {Nav, Container, Navbar} from 'react-bootstrap'


function Menu(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Campollo</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#features">Manifesto</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu