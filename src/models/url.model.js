import mongoose from 'mongoose';

// Define schema for URL model
const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
        unique: true
    },
    shortURL: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });


const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
