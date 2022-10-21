require('dotenv').config({path: __dirname + '/.env'})
const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const invoiceInstance = require('./invoiceInstance');
const invoiceLineItem = require('./invoiceLineItem');
const user = require('./user');
const API_PORT = process.env['API_PORT'];
const logger = require('morgan');
const app = express();
app.use(cors());
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');   
var jwks = require('jwks-rsa');

//Auth0 was selected as the API Auth service. However we didn't implement sessions or storing the JWT's locally
//So we ran out of our quote pretty fast
//For future enhancement, look into setting up a keystore of some kind so that we don't provision a needlessly large amount of JWT's
var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 1,
        jwksUri: process.env['JWKS_URI']
  }),
  audience: 'https://pdf-invoice/api',
  issuer: process.env['ISSUER'],
  algorithms: ['RS256']
});

const dbRoute =
    "mongodb://" + process.env['DB_URL'] + ":27017/pdf-invoice"

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'Mongo Connection Error'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', router);

router.get('/getInvoices', jwtCheck, (req, res) => {
    // console.log(req.query.createdBy)})
    if (req.query.createdBy === '*'){
        invoiceInstance.find({}, (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        
        });
        
    }else{
        invoiceInstance.find({ createdBy: req.query.createdBy }, (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
            })
        };
});

router.get('/getInvoice', jwtCheck, (req, res) => {
    invoiceInstance.find({ invoiceNumber: req.query.invoiceNumber }, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.post('/postInvoiceInstance', jwtCheck, (req, res) => {
    console.log(req.body)
    let data = new invoiceInstance({
        invoiceNumber: req.body.invoiceNumber,
        invoiceDate: req.body.invoiceDate,
        clientName : req.body.clientName,
        ATTN : req.body.ATTN,
        clientEmail : req.body.clientEmail,
        clientAddressLine : req.body.clientAddressLine,
        clientCity : req.body.clientCity,
        clientStateProvince : req.body.clientStateProvince,
        clientZipPostal : req.body.clientZipPostal,
        clientPhone : req.body.clientPhone,
        clientFax : req.body.clientFax,
        LRN : req.body.LRN,
        bookingDate : req.body.bookingDate,
        invoiceAmount: req.body.invoiceAmount,
        currency: req.body.currency,
        createdBy: req.body.createdBy
    })
    data.save()
        .then(item => {
            console.log(req.body)
            res.send("item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

router.put('/updateInvoice', jwtCheck, (req, res) => {
    console.log(req.body)
    invoiceInstance.findOneAndUpdate({ invoiceNumber: req.body.invoiceNumber }, {
        invoiceNumber: req.body.invoiceNumber,
        invoiceDate: req.body.invoiceDate,
        clientName : req.body.clientName,
        ATTN : req.body.ATTN,
        clientEmail : req.body.clientEmail,
        clientAddressLine : req.body.clientAddressLine,
        clientCity : req.body.clientCity,
        clientStateProvince : req.body.clientStateProvince,
        clientZipPostal : req.body.clientZipPostal,
        clientPhone : req.body.clientPhone,
        clientFax : req.body.clientFax,
        LRN : req.body.LRN,
        bookingDate : req.body.bookingDate,
        invoiceAmount: req.body.invoiceAmount,
        currency: req.body.currency,
        createdBy: req.body.createdBy
    }, {new: true, upsert: true}, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});



router.get('/getInvoice', jwtCheck, (req, res) => {
    invoiceInstance.find({ invoiceNumber: req.query.invoiceNumber }, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

router.get('/getInvoiceLineItems', jwtCheck, (req, res) => {
    // console.log(req.query.createdBy)})
    if (req.query.createdBy === '*'){
        invoiceLineItem.find({}, (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
        
        });
        
    }else{
        invoiceLineItem.find({ invoiceNumber: req.query.invoiceNumber }, (err, data) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true, data: data });
            })
        };
});

router.post('/postInvoiceLineItem', jwtCheck, (req, res) => {
    console.log(req.body)
    let data = new invoiceLineItem({
        invoiceNumber: req.body.invoiceNumber,
        invoiceLineItem: req.body.invoiceLineItem,
        item: req.body.item,
        shipperName: req.body.shipperName,
        shipperAddressLine : req.body.shipperAddressLine,
        shipperCity : req.body.shipperCity,
        shipperStateProvince : req.body.shipperStateProvince,
        shipperPostal : req.body.shipperPostal,
        pickUpDate : req.body.pickUpDate,
        consigneeName: req.body.consigneeName,
        consigneeAddressLine: req.body.consigneeAddressLine,
        consigneeCity: req.body.consigneeCity,
        consigneeStateProvince: req.body.consigneeStateProvince,
        consigneeZipPostal: req.body.consigneeZipPostal,
        deliveryDate: req.body.deliveryDate,
        invoiceLineAmount: req.body.invoiceLineAmount,
        createdBy: req.body.createdBy
    })
    data.save()
        .then(item => {
            console.log(req.body)
            res.send("item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

router.put('/updateInvoiceLineItem', jwtCheck, (req, res) => {
    console.log(req.body)
    invoiceLineItem.findOneAndUpdate({ invoiceNumber: req.body.invoiceNumber, invoiceLineItem: req.body.invoiceLineItem }, {
        invoiceNumber: req.body.invoiceNumber,
        invoiceLineItem: req.body.invoiceLineItem,
        item: req.body.item,
        shipperName: req.body.shipperName,
        shipperAddressLine : req.body.shipperAddressLine,
        shipperCity : req.body.shipperCity,
        shipperStateProvince : req.body.shipperStateProvince,
        shipperPostal : req.body.shipperPostal,
        pickUpDate : req.body.pickUpDate,
        consigneeName: req.body.consigneeName,
        consigneeAddressLine: req.body.consigneeAddressLine,
        consigneeCity: req.body.consigneeCity,
        consigneeStateProvince: req.body.consigneeStateProvince,
        consigneeZipPostal: req.body.consigneeZipPostal,
        deliveryDate: req.body.deliveryDate,
        invoiceLineAmount: req.body.invoiceLineAmount,
        createdBy: req.body.createdBy
    }, {new: true, upsert: true}, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/deleteInvoiceLineItem', jwtCheck, (req, res) => {
    console.log(req.body)
    invoiceLineItem.findOneAndDelete({ invoiceNumber: req.body.invoiceNumber, invoiceLineItem: req.body.invoiceLineItem})
    .then((user) => {
        if (!user) {
          res.status(405).send(req.body.invoiceNumber + ':' + req.body.invoiceLineItem + ' was not found');
        } else {
          res.status(200).send(req.body.invoiceNumber + ':' + req.body.invoiceLineItem + ' was deleted.');
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});


router.get('/getUser', jwtCheck, (req, res) => {
    console.log(req.query.userEmail)
    user.find({ userEmail: req.query.userEmail }, (err,data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
})


router.patch('/updateUser', jwtCheck, (req, res) => {
    console.log(req.body)
    user.findOneAndUpdate({ userEmail: req.body.userEmail }, {
        title: req.body.title,
        role: req.body.role
    }, {new: true, upsert: true}, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.post('/auth', jwtCheck, (req, res) => {
    console.log(req.body)
    let data = new user({
        name: req.body.name,
        userEmail: req.body.email
    })
    data.save()
        .then(item => {
            console.log(req.body)
            res.send("item saved to database")
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});


app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));