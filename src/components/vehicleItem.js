import React from 'react';

// Imported Link to help us connect between elements of components
// ie. switch between them and connect to each other
import {Link} from 'react-router-dom';

// Imported bootstrap elements
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// Imported axios to connect to server
import axios from 'axios';


// Export to allow component being used elsewhere
export class VehicleItem extends React.Component {

    constructor(){
        super()

        // Define object binds
        this.DeleteVehicle = this.DeleteVehicle.bind(this)
    }

    // Remove vehicle listing method by ID
    DeleteVehicle(veh){
        // Prevents method being called everytime page is loaded
        // In other words, prevents multiple deletes
        veh.preventDefault()
        console.log("Removed: " + this.props.vehicle._id)

        axios.delete("http://localhost:4000/api/vehicles/" + this.props.vehicle._id)
        .then(()=>{
            this.props.ReloadData()
        })
        .catch((error) => {
            console.log(error)
        });
    }

    // Rendering method to print
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card bg="light" border="info">
                                <Card.Header>{this.props.vehicle.model}</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <img src={this.props.vehicle.photo} width ="250" height ="250"></img>
                                    <footer className="blockquote-footer">
                                        <p><b>About:</b> {this.props.vehicle.type} - {this.props.vehicle.year} - {this.props.vehicle.mileage}</p>
                                        <p><b>Contact:</b> {this.props.vehicle.contact}</p>
                                    </footer>
                                    </blockquote>
                                </Card.Body>
                                <Container>
                                    <Link to={"/edit/" + this.props.vehicle._id} className='btn btn-warning'>Edit</Link> <Button variant="danger" onClick={this.DeleteVehicle}>Remove</Button>
                                </Container>
                                <br />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        );
    }
}
