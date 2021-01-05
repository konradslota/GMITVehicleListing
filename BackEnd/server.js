const express = require('express')
const app = express()

// Port changed to 4000 to prevent clashing with front-end app
const port = 4000

// Installed cors for server connection
const cors = require('cors')
const bodyParser = require("body-parser")

// Include mongoose
const mongoose = require('mongoose')

//Include path routing
const path = require('path')

// Cors Methods
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
    
// Change path to the build folder which will allow us to merge the
// back-end and front-end together so that the application will run
// off from the same files in the same place
app.use(express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, 'build//static')))

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())

// Connection String with our mongoDB
const myConnectionString = 'mongodb+srv://admin:admin123@cluster0.jmq6f.mongodb.net/vehicles?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    model:String,
    type:String,
    year:String,
    mileage:String,
    contact:String,
    photo:String
})

var VehicleOBJModel = mongoose.model("vehicle", vehicleSchema);

// Get method
app.get('/api/vehicles', (req, res)=>{
    // const myvehicles = [
    //     {
    //         "Model": "Honda Civic",
    //         "Type": "hatchback",
    //         "Mileage": "50,000km",
    //         "Year": "2016",
    //         "Contact": "08123456789",
    //         "imdbID": "tt4154756",               
    //         "Photo": "https://www.flaticon.com/svg/static/icons/svg/3721/3721578.svg"
    //     },
    //     {
    //         "Model": "Toyota Avensis",
    //         "Type": "sedan",
    //         "Mileage": "65,000km",
    //         "Year": "2015",
    //         "Contact": "08234567890",
    //         "imdbID": "tt3498820",               
    //         "Photo": "https://www.flaticon.com/svg/static/icons/svg/3721/3721398.svg"
    //     },
    //     {
    //         "Model": "Nissan Juke",
    //         "Type": "SUV",
    //         "Mileage": "5,000km",
    //         "Year": "2019",
    //         "Contact": "0863924245",
    //         "imdbID": "tt4153771",               
    //         "Photo": "https://www.flaticon.com/svg/static/icons/svg/3721/3721406.svg"
    //     }
    // ];

    VehicleOBJModel.find((err, data)=>{
        res.json(data)
    })
})

// Get method
app.get('/api/vehicles/:id', (req, res)=> {
    console.log(req.params.id)

    VehicleOBJModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

// Put method
app.put('/api/vehicles/:id', (req, res)=> {
    console.log("Update vehicle listing: " + req.params.id)
    console.log(req.body)

    // Request to gain new vehicle listing information
    VehicleOBJModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data)=> {
        res.send(data)
    })
})

// Delete method
app.delete('/api/vehicles/:id', (req, res)=> {
    console.log("Delete vehicle listing: " + req.params.id)

    // Search for vehicle listing ID and delete entry
    VehicleOBJModel.findByIdAndDelete(req.params.id, (err, data)=> {
        res.send(data)
    })
})

// Post method
app.post('/api/vehicles', (req, res)=>{
    console.log('Vehicle listing received!')
    console.log(req.body.model)
    console.log(req.body.type)
    console.log(req.body.mileage)
    console.log(req.body.year)
    console.log(req.body.contact)
    console.log(req.body.photo)

    VehicleOBJModel.create({
        model:req.body.model,
        type:req.body.type,
        mileage:req.body.mileage,
        year:req.body.year,
        contact:req.body.contact,
        photo:req.body.photo
    })

    // Prevent multiple database entries upon form submit
    res.send('Listing listed!')
})

// Connection routes. * meaning all sending the index.html file to
// the server. Now our main application will run at localhost:4000
app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname + '/../build/index.html'))
})

// Port listening connection string
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})