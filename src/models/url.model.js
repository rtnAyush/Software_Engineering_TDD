const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Define schema for URL model
const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
        unique: true
    },
    shortURL: {
        type: String,
        unique: true
    },
}, { timestamps: true });

// Create a virtual property for the short URL
urlSchema.virtual('fullShortURL').get(function () {
    return process.env.BASE_URL + "/" + this._id;
});

// Define pre-save hook to set the short URL before saving
urlSchema.pre('save', async function (next) {
    if (!this.shortURL) {
        this.shortURL = this.fullShortURL;
    }
    next();
});

module.exports = URL = mongoose.model('URL', urlSchema);
