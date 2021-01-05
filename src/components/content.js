import React from 'react';

// Imported bootstrap elements
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

// Export to allow component being used elsewhere
export class Content extends React.Component {

    // Rendering method to print
    render(){
        return(
            <div>
                <h1>Welcome to GMIT Vehicle Listing App</h1>
            <br />
                <Container>
                    <Row>
                        <Col>                       
                            <Card bg="light" border="info">
                                <Card.Body>
                                    <img src="https://imgur.com/PvfxQaK.png" width="150" height="150"></img>
                                    <Card.Text>Browse through the already <Card.Link href="/available">available</Card.Link> vehicle listings!</Card.Text>
                                    <Card.Text>If you're ready to create your own vehicle listing <Card.Link href="/listing">click here</Card.Link>.</Card.Text>
                                </Card.Body>
                            </Card>                   
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <Row>
                        <Col>                       
                            <Card bg="light" border="warning">
                                <Card.Body>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/3068/3068375.svg" width="150" height="150"></img>
                                    <Card.Text>Learn more about us! <Card.Link href="/about">Click here</Card.Link> to find out how this app works. There you can also find the FAQ section</Card.Text>
                                </Card.Body>
                            </Card>                   
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        );
    }
}
