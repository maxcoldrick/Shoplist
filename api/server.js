'use strict';

const PORT = 8080;
const express = require('express');
const app = express();
const mysql = require('mysql');

// A really bloody simple app that takes a GET request and sends it on to
//  the mySQL server on the docker network

// Create database connection with creds
var db = mysql.createConnection({
    host: "mysql",
    user: "api",
    password: "password",
    database: "movies"
});

// Connect to database
var db_status = db.connect(function(err) {
  if (err) throw error;
  console.log("\nConnected to movies database")
});

// Defining routes
app.get('/', function (req, res) {
    return res.send({ message: 'Error #1' })
});

app.get('/twentyeighteen', function (req, res) {
    db.query('SELECT * FROM twentyeighteen', function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results});
    });
});

app.get('/twentyeighteen/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    db.query("SELECT * FROM twentyeighteen WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results});
    });
});

app.get('/twentyseventeen', function (req, res) {
    db.query('SELECT * FROM twentyseventeen', function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results});
    });
});

app.get('/twentyeighteen/:id', function (req, res) {
    let movie_id = req.params.id;
    db.query('SELECT * FROM twentyeighteen where movie_id=?', movie_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results[0]});
    });

});

// TODO: revisit
app.get('/twentyseventeen/search/:keyword', function (req, res) {
    let keyword = req.params.keyword;
    db.query("SELECT * FROM twentyseventeen WHERE name LIKE ? ", ['%' + keyword + '%'], function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results});
    });
});

// TODO: revisit
app.get('/twentyseventeen/:id', function (req, res) {
    let movie_id = req.params.id;
    db.query('SELECT * FROM twentyseventeen where movie_id=?', movie_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({data: results});
    });

});

// Request catcher
app.all("*", function (req, res, next) {
    return res.send({message: 'Probably not implemented yet.'});
    next();
});

// express listen on a port
app.listen(PORT);
console.log("\n Waiting for REST request");
