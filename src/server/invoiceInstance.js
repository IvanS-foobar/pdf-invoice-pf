const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const invoiceInstance = new Schema (
    {
        invoiceNumber: {type: Number, unique: true},
        invoiceDate: Date,
        clientName : String,
        ATTN : String,
        clientEmail : String,
        clientAddressLine : String,
        clientCity : String,
        clientStateProvince : String,
        clientZipPostal : String,
        clientPhone : String,
        clientFax : String,
        LRN : String,
        bookingDate : Date,
        invoiceAmount: Number,
        currency: String,
        createdBy: String
    },
    { timestamps: true }
);


module.exports = mongoose.model("invoiceInstance", invoiceInstance);