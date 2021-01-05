import React from 'react';

// Imported Vehicles from Cpomonents folder
import { Vehicles } from './vehicles';

// Imported Axios
import axios from 'axios';

// Export to allow component being used elsewhere
export class Available extends React.Component {

    constructor(){
        super()

        // Define object binds
        this.ReloadData = this.ReloadData.bind(this)
    }

    state = {
        // Vehicles Object - array name
        vehicles: [

            ]
        };

        //component life-cycle. Called everytime when component is active
        componentDidMount(){
            axios.get('http://localhost:4000/api/vehicles')
            .then((response) => {
                this.setState({ vehicles: response.data})
            })
            .catch((error) => {
                console.log(error)
            });
        }

        // Method to reload data which we can use with remove method for smooth user experience
        ReloadData(){
            axios.get('http://localhost:4000/api/vehicles')
            .then((response) => {
                this.setState({ vehicles: response.data})
            })
            .catch((error) => {
                console.log(error)
            });
        }

    // Rendering method to print
    render(){
        return(
            <div>
                <h1>Here are the available vehicle listings:</h1>
                <br />
                <Vehicles vehicles={this.state.vehicles} ReloadData={this.ReloadData}></Vehicles>
            </div>
        );
    }
}
