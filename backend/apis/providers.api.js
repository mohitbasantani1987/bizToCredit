const express = require('express'),
      httpStatus = require('http-status-codes');

const router = express.Router();

const provider = require('../models/providers');

//GET All
router.get('/', function(req, res) {
    provider.find({}, function(err, data) {
        res.status(httpStatus.OK).send(data);
    });
}).get('/:id', function(req, res) {
    var id = req.params.id;
    provider.findById(id, function(err, data) {
        res.status(httpStatus.OK).send(data);
    });
}).post('/', function(req, res) {
    var obj = req.body;
    var objProv = new provider(obj);
    objProv.save(function(err, data) {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        } else {
            res.status(httpStatus.CREATED).send();
        }
    });
}).delete('/:id', function(req, res) {
    var id = req.params.id;
    provider.findByIdAndRemove(id, function(err) {
        if (err) res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        res.status(httpStatus.OK).send();
    });
});

module.exports = router;