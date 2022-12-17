const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [true, 'First Name'],
        maxlenght: [40, 'First Name cannot be more that 40 character']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name'],
        maxlenght: [40, 'Last Name cannot be more that 40 character']
    },
    email: {
        type: String,
        required: [true, 'Email'],
        unique: true,
        maxlenght: [40, 'Email cannot be more that 40 character']
    },
    empCode:{
        type: Number,
        required: [true],
        unique: true,
        maxlenght:[10]
    },
    dateOfJoining:{
        type: Date,
        required:[true],
    },
    gender:{
        type: String,
        required:[true]
    },
    designation: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }


})

module.exports = mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema);