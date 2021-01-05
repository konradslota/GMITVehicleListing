import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

// Export to allow component being used elsewhere
export class Edit extends React.Component {

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
        alert ("Vehicle listing updated!");
        const newVehicle = {
            model: this.state.Model,
            type: this.state.Type,
            year: this.state.Year,
            mileage: this.state.Mileage,
            contact: this.state.Contact,
            photo: this.state.Photo,
            _id: this.state._id
        }  
        
        axios.put('http://localhost:4000/api/vehicles/' + this.state._id, newVehicle)
        .then(res =>{
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        });

    }


    // Run when edit component is active
    componentDidMount(){
        console.log("ID: " + this.props.match.params.id)

        // Connecting with server to allow update to the Vehicle listing by it's ID
        axios.get('http://localhost:4000/api/vehicles/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Model:response.data.model,
                Type:response.data.type,
                Year:response.data.year,
                Mileage:response.data.mileage,
                Contact:response.data.contact,
                Photo:response.data.photo,
            })
        })
        .catch((error)=>{
            console.log(error)
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
                    <h1>Edit the listing:</h1>
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
                            <input type='submit' value='Update listing' className='btn btn-warning'></input>
                        </div>             
                    </form>
                </div>
            </Container>
        );
    }
}
