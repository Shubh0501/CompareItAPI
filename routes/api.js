const express = require('express');
const Camera = require('../models/Camera_Schema');

const router = express.Router();

router.get('/cameras', function(req, res, next) {
    Camera.find({}).select('general -_id').then(data => {
        if(data == null){
            res.status(204).send({
                error: 'NO DATA FOUND IN CAMERAS'
            })
        }
        else{
            res.send({
                data
            })
        }
    }).catch(next);
});

router.get('/cameras/:id', function(req, res, next){
    Camera.findOne({ id: req.params.id }).then(camera => {
        if(camera == null){
            res.status(204).send({
                error: 'No camera found for this ID'
            })
        }
        else{
            res.send({
                data
            });
        }
    }).catch(next);
})

module.exports = router;