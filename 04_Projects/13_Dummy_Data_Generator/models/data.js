import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    language :{
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    city :{
        type: String,
        required: true,
    },
    is_manager: {
        type: Boolean,
        required: true,
    }
})

export const Employee = mongoose.model('employee', dataSchema)