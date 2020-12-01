const express = require('express'),
      httpStatus = require('http-status-codes');

const router = express.Router();

const providerDetails = require('../models/providersdetails');

//GET All
router.get('/:id', function(req, res) {
    var id = req.params.id;
    providerDetails.findOne({providerId:id})
    .select('_id maxSpeed description contactNo email image url provierId')
    .populate('providers')
    .exec(function(err,data){
        res.status(httpStatus.OK).send(data);
    })
}).post('/', function(req, res) {
    var obj = req.body;
    var objProv = new providerDetails(obj);
    objProv.save(function(err, data) {
        if (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        } else {
            res.status(httpStatus.CREATED).send();
        }
    });
}).delete('/:id', function(req, res) {
    var id = req.params.id;
    providerDetails.findByIdAndRemove(id, function(err) {
        if (err) res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
        res.status(httpStatus.OK).send();
    });
});

module.exports = router;