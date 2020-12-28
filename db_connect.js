import mongoose from 'mongoose'

const SERVER ={
    hostname: '192.168.1.180',
    port: 27017,
    dbname: 'Raspberry_db',
    collection: 'tests'
}
function connect(){
mongoose.connect(`mongodb://${SERVER.hostname}:${SERVER.port}/${SERVER.dbname}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result=>{
    console.log("Połączono z DB");
}).catch(
    error=> console.log(error))
}

export {connect}