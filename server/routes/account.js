var express = require('express');
var Account = require('../models/account');

const app = express.Router()

/*
    ACCOUNT SIGNUP : POST /api/account/signup
    BODY SAMPLE : {"username" : "test", "password" : "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAME EXISTS
 */

app.route("/signup")
    .post(function (req, res) {
        console.log("POST : Sign up request");
        let usernameRegex = /^[a-z0-9]+$/;

        // BAD USERNAME
        if(!usernameRegex.test(req.body.username)) {
            return res.status(400).json({
                error : "BAD USERNAME",
                code : 1
            })
        }


        // BAD PW
        if(req.body.password.length < 4 || typeof req.body.password !== "string") {
            return res.status(400).json({
                error : "BAD PASSWORD",
                code : 2
            })
        }

        // CHECK IF USER EXISTS
        Account.findOne({ username: req.body.username }, (err, exists) => {
            if(err) throw err;
            if(exists) {
                return res.status(409).json({
                    error: "USERNAME EXISTS",
                    code : 3
                });
            }

            // NEW ACCOUNT
            let account = new Account({
                username: req.body.username,
                password: req.body.password
            });

            account.password = account.generateHash(account.password);

            // SAVE
            account.save(err => {
                if(err) throw err;
                return res.json({success: true});
            })
        })
    });

/*
    ACCOUNT SIGNIN: POST /api/account/signin
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: NO ACCOUNT
        2. WRONG PASSWORD
*/


app.route("/signin")
    .post(function(req, res) {
        if (typeof req.body.password !== "string") {
            return res.status(401).json({
                error: "LOGIN FAILED",
                code: 1
            });
        }

        Account.findOne({username: req.body.username}, (err, account) => {
            if (err) throw err;

            // CHECK IF ACCOUNT EXISTS
            if (!account) {
                return res.status(401).json({
                    error: "LOGIN FAILED",
                    code: 1
                });
            }

            // CHECK PW IS CORRECT
            if (!account.validateHash(req.body.password)) {
                return res.status(401).json({
                    error: "WRONG PASSWORD",
                    code: 2
                });
            }

            // ALTER SESSION
            let session = req.session;
            session.loginInfo = {
                _id: account._id,
                username: account.username
            }

            // RETURN SUCCESS
            return res.json({
                success: true
            });
        });
    });

/*
    GET CURRENT USER INFO
 */

app.route("/getinfo")
    .get(function(req, res) {
        if(typeof req.session.loginInfo == "undefined") {
            return res.status(401).json({
                error: 1
            })
        }

        res.json({info: req.session.loginInfo});
    });

/*
    LOGOUT: POST /api/account/logout
 */
app.route("/logout")
    .post(function(req, res) {
        req.session.destroy(err => {if(err) throw err;});
        return res.json({success: true});
    })

module.exports = app;