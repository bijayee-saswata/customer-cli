const mongoose = require('mongoose');
const model = require('./schema');
//connect to mlab
const db = mongoose.connect('mongodb://bg:test123@ds037611.mlab.com:37611/customers',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connected to mlab...');
}).catch(err => console.error(err));

//add customer
const addCustomer = (customer) => {
    model.create(customer).then(cu =>{
        console.info('New Customer Added');
        db.close();
    })
}
//find customer
const findCustomer = (name) =>{
    const s = name.toLowerCase();
    console.info(s);
    model.find({$or: [{firstName: s}, {lastName: s}]})
    .then(cu =>{
        console.info(cu);
        console,info(`${cu.length} matches.`);
        db.close();
    })
}

module.exports = {
    addCustomer,
    findCustomer
}