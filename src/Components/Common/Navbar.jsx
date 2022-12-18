import React,{Fragment} from 'react';
import { Container, Navbar as Bar, Nav } from 'react-bootstrap';
import {PersonCircle} from 'react-bootstrap-icons';
function Navbar(props) {
    return (
        <Fragment>
            <Bar bg='primary' variant='dark' fixed='top'>
                <Container>  
                <Bar.Brand href='#' className='me-auto'>Medica</Bar.Brand>
                <Nav>
                    <Nav.Link href='/login'>
                        <PersonCircle size={25}/>
                    </Nav.Link>
                </Nav>
                </Container>
            </Bar>
        </Fragment>
    );
}

export default Navbar;