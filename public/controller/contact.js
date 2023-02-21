let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        }
        else {
            console.log("Logging contact list:::", contactList);
            res.render('contact/list',
                {
                    title: 'Contacts',
                    ContactList: contactList,
                    displayName: req.user ? req.user.displayName : ''
                });
        }
    });
}