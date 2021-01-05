import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

// Export to allow component being used elsewhere
export class Listing extends React.Component {

    constructor(){
        // Super meeded to use forms
        super();

        // Define object binds
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeMileage = this.onChangeMileage.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);

        // States of our array element values
        this.state = {
            Model:'',
            Type:'',
            Year:'',
            Mileage:'',
            Contact:'',
            Photo:''
        }
    }

    // methods 'veh' - ('Vehicles')
    // onSubmit method
    onSubmit(veh){
        // preventDefault helps to prevent multiple form submissions
        veh.preventDefault();
        // Alert user of submiting the form
        alert ("Vehicle listed!");
        const newVehicle = {
            model: this.state.Model,
            type: this.state.Type,
            year: this.state.Year,
            mileage: this.state.Mileage,
            contact: this.state.Contact,
            photo: this.state.Photo
        }
        axios.post('http://localhost:4000/api/vehicles', newVehicle)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // onChangeModel method
    onChangeModel(veh){
        this.setState({
            Model: veh.target.value
        });
    }

    // onChangeType method
    onChangeType(veh){
        this.setState({
            Type: veh.target.value
        });
    }

    // onChangeYear method
    onChangeYear(veh){
        this.setState({
            Year: veh.target.value
        });
    }

    // onChangeMileage method
    onChangeMileage(veh){
        this.setState({
            Mileage: veh.target.value
        });
    }

    // onChangeContact method
    onChangeContact(veh){
        this.setState({
            Contact: veh.target.value
        });
    }
    
    // onChangePhoto method
    onChangePhoto(veh){
        this.setState({
            Photo: veh.target.value
        });
    }

    // Rendering method to print
    render(){
        return(
            <Container>
                {/* Lsting form with onSubmit method */}
                <div className='App'>
                    <h1>List your vehicle by providing details:</h1>
                <br />
                    <form onSubmit={this.onSubmit}>
                        {/* Model */}
                        <div className='form-group'>
                            <label>Vehicle Make and Model: </label>
                            <input type='text' className='form-control' value={this.state.Model} onChange={this.onChangeModel} required></input>
                        </div>
                        {/* Type */}
                        <div className='form-group'>
                            <label>Vehicle Type: </label>
                            <input type='text' className='form-control' value={this.state.Type} onChange={this.onChangeType} required></input>
                        </div>
                        {/* Year */}
                        <div className='form-group'>
                            <label>Manufactured Year: </label>
                            <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear} required></input>
                        </div>
                        {/* Mileage */}
                        <div className='form-group'>
                            <label>Mileage: </label>
                            <input type='text' className='form-control' value={this.state.Mileage} onChange={this.onChangeMileage} required></input>
                        </div>
                        {/* Contact */}
                        <div className='form-group'>
                            <label>Prefered contact method(s): </label>
                            <input type='text' className='form-control' value={this.state.Contact} onChange={this.onChangeContact} required></input>
                        </div> 
                        {/* Photo */}
                        <div className='form-group'>
                            <label>Vehicle Picture URL: </label>
                            <textarea type='text' className='form-control' value={this.state.Photo} onChange={this.onChangePhoto} required></textarea>
                        </div>
                        {/* Submit Button */}
                        <div className='form-group'>
                            <input type='submit' value='Add Listing' className='btn btn-info'></input>
                        </div>             
                    </form>
                </div>
            </Container>
        );
    }
}
