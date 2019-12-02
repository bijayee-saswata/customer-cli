const mongoose = require('mongoose');
const model = require('./schema');
const dotenv = require('dotenv');
dotenv.config();
//connect to mlab
const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds037611.mlab.com:37611/customers`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected to mlab...');
}).catch(err => console.error(err));

//add customer
const addCustomer = (customer) => {
    model.create(customer).then(cu =>{
        console.info('New Customer Added');
    })
    .catch(err => console.error(err));
}
//find customer
const findCustomer = (name) =>{
    const s = name.toLowerCase();
    model.find({$or: [{firstName: s}, {lastName: s}]})
    .then(cu =>{
        console.info(cu);
        console.info(`${cu.length} matches.`);
    })
    .catch(err => console.error(err))
}

module.exports = {
    addCustomer,
    findCustomer
}