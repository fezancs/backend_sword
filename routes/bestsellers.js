var express = require('express');
var router = express.Router();
var model = require('../models/bestsellers-model');

router.get('/', function(req, res) {
    model.getbestsellers(function(err, result) {
        if(err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:sku', function(req, res) {
    let sku = req.params.sku;
    model.getbestsellers(sku, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.post('/add', function(req, res) {
    console.log(req.body);
    model.addbestsellers(req.body, function(err, result) {
        res.json({data: result, error: err});
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deletebestsellers(id, function(err, result) {
        res.json({data: result, error: err});
    })
})


module.exports = router;