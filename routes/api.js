const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/', function(req, res){
    res.send("Welcome!");
});
//get a list of items from database
router.get('/catalog/:id', function (req, res, next) {
    Item.findOne({ _id: req.params.id }).then(function (item) {
        res.send(item);
      });
});

router.get('/catalog', function (req, res, next) {
    Item.find({}).then(function(item){
        res.send(item);
    });
});


//add a new item in the catalog
router.post('/addToCatalog', function (req, res, next) {
    Item.create(req.body).then(function (item) {
        res.send(item);
    }).catch(next);
});

//update an item in the database
router.put('/UpdateCatalog/:id', function (req, res, next) {
    Item.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Item.findOne({ _id: req.params.id }).then(function (item) {
            res.send(item);
        });
    });
});

//delete an item from the database
router.delete('/deleteFromCatalog/:id', function (req, res, next) {
    //console.log(req.params.id);
    Item.findByIdAndRemove({ _id: req.params.id }).then(function (item) {
        res.send(item);
    });
});

module.exports = router;
