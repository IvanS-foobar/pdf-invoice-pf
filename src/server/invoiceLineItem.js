const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const invoiceLineItem = new Schema (
    {
        invoiceNumber: {type: Number},
        invoiceLineItem: {type: Number},
        item : String,
        shipperName : String,
        shipperAddressLine : String,
        shipperCity : String,
        shipperStateProvince : String,
        shipperPostal : String,
        pickUpDate : Date,
        consigneeName: String,
        consigneeAddressLine: String,
        consigneeCity: String,
        consigneeStateProvince: String,
        consigneeZipPostal: String,
        deliveryDate: Date,
        invoiceLineAmount: Number,
        createdBy: String
    },
    { timestamps: true }
);


module.exports = mongoose.model("invoiceLineItem", invoiceLineItem);