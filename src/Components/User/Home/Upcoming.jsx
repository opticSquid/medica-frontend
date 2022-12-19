import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { PersonCircle, CalendarEvent } from 'react-bootstrap-icons';
function Upcoming() {
    return (
        <Card className='shadow'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col xs={3} className="my-auto">
                            <PersonCircle color='#0D6EFD' size={60}/>
                        </Col>
                        <Col>
                            <Row>
                                <Card.Title>Doctor Name</Card.Title>
                            </Row>
                            <Row>
                                <p style={{"fontFamily":"'Roboto', sans-serif","MozOsxFontSmoothing": "grayscale","WebkitFontSmoothing": "antialiased","fontWeight":400, fontSize:"12px", "color":"rgba(0,0,0,0.7)"}}>Reason wh you are visiting the doctor. The ailment</p>
                            </Row>
                            <Row>
                                <Col xs={1}><CalendarEvent/></Col>
                                <Col style={{"fontFamily":"'Roboto', sans-serif","MozOsxFontSmoothing": "grayscale","WebkitFontSmoothing": "antialiased","fontWeight":400, "color":"rgba(0,0,0,0.7)"}}>31/12/22&nbsp;3:35pm</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Upcoming;