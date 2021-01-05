import React from 'react';
import { VehicleItem } from './vehicleItem';

// Export to allow component being used elsewhere
export class Vehicles extends React.Component {

    // Rendering method to print on screen
    render() {
        return this.props.vehicles.map( (vehicle)=>{
            return <VehicleItem vehicle={vehicle} ReloadData={this.props.ReloadData}></VehicleItem>
        })
    }
}
