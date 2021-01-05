import React from 'react';

// Imported bootstrap elements
import { Col, Container, DropdownButton, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

// Export to allow component being used elsewhere
export class About extends React.Component {

    // Rendering method to print
    render(){
        return(
            <div>
                <h1>About Us</h1>
            <br />
                <Container>
                    <Row>
                        <Col>                       
                            <Card bg="light" border="info">
                                <Card.Body>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/476/476863.svg" width="150" height="150"></img>
                                    <Card.Text><i>This is a student driven project.</i> The goal of this application was to enable GMIT students, as users, to create vehicle listings by connecting to the server database which then can be veiwed by other users. These listings are there to allow the users to purchase or sell their vehicles to other students of GMIT. Every listing has a option to be edited if wrong information was put in as well as being deleted if such vehicle has been sold. This idea was created since my fellow GMIT students always had difficulties finding a new car and selling their old one. This application should be handy for someone looking to do exactly that. All project requirements have been met.</Card.Text>
                                    <footer className="blockquote-footer">
                                        This application is developed using the MERN stack approach (MongoDB, Express, React, Node.js) by <cite title="Source Title">Konrad Slota G00354637 </cite>
                                    </footer>
                                </Card.Body>
                            </Card>                   
                        </Col>
                    </Row>
                </Container>
                <br />
                    <h1>FAQ</h1>
                <br />
                <Container>
                    <Row>
                        <Col>                       
                            <Card bg="light" border="warning">
                                <Card.Body>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/237/237188.svg" width="150" height="150"></img>
                                <br /><br />
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Who is this app for?</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.ItemText>This application is built with GMIT students in mind, however anyone can use it.</Dropdown.ItemText>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                <br />
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Is this service free of charge?</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.ItemText>This applications does not include any transactions nor transaction fees. It is built in mind of tradimg vehicle information and user's contact.</Dropdown.ItemText>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                <br />
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Can I update my listing after it has been submitted?</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.ItemText>Yes! Head over to the available section. You can either edit your information, or delete the listing entirely!</Dropdown.ItemText>
                                        </Dropdown.Menu>
                                    </Dropdown>
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

// 
                                        