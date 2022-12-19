import React, {Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../../Common/Navbar';
import Slideshow from './Slideshow';
import Upcoming from './Upcoming';
function UserHome(props) {
    return (
        <Fragment>
            <Navbar/>
            <Container fluid style={{"marginTop":"15%", "padding":"2%"}}>
            <Slideshow/>
            <p style={{"fontFamily":"'Roboto', sans-serif","MozOsxFontSmoothing": "grayscale","WebkitFontSmoothing": "antialiased","fontWeight":500, fontSize:"16px", "paddingTop":"3%"}}>Upcoming Appointments</p>
            <Upcoming/>
            </Container>
        </Fragment>
    );
}

export default UserHome;