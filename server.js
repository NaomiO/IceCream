const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
var connection = require('./app');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('pages/inventory');
});


app.get('/inventory', (req,res) => {
    res.render('pages/inventory');
});

app.get('/stores', (req,res) => {

    let sql = "SELECT * FROM city_data ORDER BY NameCity";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.render('pages/stores',{cities: results, flavors: []});
    
    });

});


app.get('/flavors', (req,res) => {

    let sql = "SELECT * FROM city_data where NameCity='"+req.query.name+"'";
    connection.query(sql, function(err, flavors){
        if (err) throw err;
        res.render('pages/stores',{flavors: flavors});
        res.send(flavors)
    
    });

});

app.get('/dashboard', (req,res) => {

    let sql1 = "SELECT * FROM city_data";
    connection.query(sql1, function(err, results){
        if (err) throw err;
        res.render('pages/dashboard',{halva: results});   
    });
/*
    let sql2 = "SELECT SUM(Chocolate) FROM naomi.city_data";
    connection.query(sql2, function(err, chocolate){
        if (err) throw err;
        res.render('pages/dashboard',{chocolate: chocolate});   
    });

    let sql3 = "SELECT SUM(Strawberry) FROM naomi.city_data";
    connection.query(sql3, function(err, strawberry){
        if (err) throw err;
        res.render('pages/dashboard',{strawberry: strawberry});   
    });

    let sql4 = "SELECT SUM(Lemon) FROM naomi.city_data";
    connection.query(sql4, function(err, lemon){
        if (err) throw err;
        res.render('pages/dashboard',{lemon: lemon});   
    });
    
    let sql5 = "SELECT SUM(Vanilla) FROM naomi.city_data";
    connection.query(sql5, function(err, vanilla){
        if (err) throw err;
        res.render('pages/dashboard',{vanilla: vanilla});   
    });
*/
});

app.get('/trainModel', (req,res) => {
    res.render('pages/trainModel');
});


app.listen(port, () => {
  console.log(`Http://localhost: ${port}`)
});


