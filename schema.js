const mongoose = require('mongoose');
//schema
const customerSchema = mongoose.Schema({
    firstName: {type : String},
    lastName: {type: String},
    phone: {type: Number},
    email: {type: String}
});
//define and export
module.exports = mongoose.model('customers',customerSchema);