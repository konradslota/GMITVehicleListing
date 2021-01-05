import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Imported from Cpomonents folder
import { Content } from './components/content';
import { Listing } from './components/listing';
import { Available } from './components/available';
import { Edit } from './components/edit';

// Imported bootstrap css styling previously installed
import 'bootstrap/dist/css/bootstrap.min.css';
// Imported Navbar & Nav elements from boostrap
import {Navbar, Nav} from 'react-bootstrap';

// Imported controls from router dom to allow us to change the page upon url change
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { About } from './components/about';



class App extends Component {

    // Rendering method to print
    render(){
        return (
            <Router>
                <div className="App">
                      <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="/">                        
                                <img
                                    alt=""
                                    src="https://imgur.com/PvfxQaK.png"
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/available">Available</Nav.Link>
                                <Nav.Link href="/listing">Listing</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                            </Nav>
                        </Navbar>
                    <br />
                    <Switch>
                        <Route path='/' component={Content} exact/>
                        <Route path='/available' component={Available} exact/>
                        <Route path='/listing' component={Listing} exact/>
                        <Route path='/about/' component={About} exact/>
                        <Route path='/edit/:id' component={Edit} exact/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
