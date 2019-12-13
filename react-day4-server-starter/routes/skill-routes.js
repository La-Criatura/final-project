// routes/skill-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Skill = require('../models/skill-model');
const User = require('../models/user-model');
const uploader = require('../configs/cloudinary-setup')
// <== !!!


// POST route => to create a new skill

router.post('/skills', (req, res, next) => {
  const userId = req.user._id
  // console.log(userId)
  Skill.create({
      title: req.body.title,
      description: req.body.description,
      owner: req.user._id,
      skillUserRating: 0,
      averageRating: 0,
      usedCounter: 0,
      category: req.body.category,
      skillPicture: req.body.skillPicture
      // location: PENDIENTE
    })
    .then(response => { 
      User.findByIdAndUpdate({_id: response.owner}, {$push: {skills: response._id}})
      .then((userFound) => console.log(userFound))
      return response
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get all the skills
router.get('/skills', (req, res, next) => {
  Skill.find()
    .then(allTheSkills => {
      res.json(allTheSkills);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific skill/detailed view
router.get('/skills/:id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }


  Skill.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific skill
router.put('/skills/:id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  Skill.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Skill with ${req.params.id} is updated successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific skill
router.delete('/skills/:id', (req, res, next) => {

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({
      message: 'Specified id is not valid'
    });
    return;
  }

  Skill.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Skill with ${req.params.id} is removed successfully.`
      });
    })
    .catch(err => {
      res.json(err);
    })
})

router.post('/upload', uploader.single("skillPicture"), (req, res, next) => {

  if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
  }

  res.json({ secure_url: req.file.secure_url });
})

module.exports = router;