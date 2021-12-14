const express = require('express');
const router = express.Router();
const { dataBase } = require('../models/dataBase');
const { User } = require('../models/user');

// Add Route
router.get('/add', ensureAuthenticated, async (req, res) => {
  res.render('add_dataBase', {
    title: 'Add DataBase'
  });
});
// Update Submit POST Route
router.post('/edit/:id', async (req, res) => {
  try {
    const DB = {
      localhost: req.body.localhost,
      Database_name: req.body.Database_name,
      DataBase_password: req.body. DataBase_password
    };

    let query = { _id: req.params.id }

    const update = await dataBase.update(query, DB);
    if (update) {
      req.flash('success', 'DB Updated');
      res.redirect('/');
    } return;

  } catch (e) {
    res.send(e);
  }

});

// Delete DataBase
router.delete('/:id', async (req, res) => {

  try {
    if (!req.user._id) {
      res.status(500).send();
    }
    let query = { _id: req.params.id }
    const DB = await dataBase.findById(req.params.id);

    if (DB.user != req.user._id) {
      res.status(500).send();
    } else {
      remove = await dataBase.findByIdAndRemove(query);
      if (remove) {
        res.send('Success');
      }
    };
  } catch (e) {
    res.send(e);
  }

});
// Access Control
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('danger', 'Please login');
    res.redirect('/users/login');
  }
}

module.exports = router;
