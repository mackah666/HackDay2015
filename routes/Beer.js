var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Beer = require('../models/beer.js');





/* GET /beers listing. */
router.get('/', function(req, res, next) {
  Beer.find(function (err, beers) {
    if (err) return next(err);
    res.json(beers);
  });
});

/* GET /beers/id */
router.get('/:id', function(req, res, next) {
  Beer.findById(req.params.id, function (err, beer) {
    if (err) return next(err);
    res.json(beer);
  });
});


/* PUT /beers/id */
router.put('/:id', function(req, res, next) {
  Beer.findById(req.params.id, function (err, beer) {
    if (err) return next(err);
    // Update the existing beer quantity
    beer.quantity = req.body.quantity;

    // Save the beer and check for errors
    beer.save(function(err) {
      if (err)
        res.send(err);
    });
    res.json(beer);
  });
});


/* POST /beers */
router.post('/', function(req, res, next) {
  Beer.create(req.body, function (err, beer) {
    if (err) return next(err);
    res.json(beer);
  });
});

module.exports = router;