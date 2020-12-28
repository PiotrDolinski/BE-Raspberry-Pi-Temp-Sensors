import mongoose from "mongoose"

const sensorSchema= new mongoose.Schema({
    sensor_id: String,
    date: String,
    time: String,
    temp: String
})
const Item = mongoose.model('tests',sensorSchema)

export {Item}