const express = require('express')
const router = express.Router()
const dal = require('../dal')

router
  .route('/')
  .get(function (req, res) {
    res.render('home')
  })

//login routes
router
  .route('/login')
  .get(function (req, res) {
    res.render('login')
  })
  .post(function (req, res) {
    const session = req.session
    const foundUsr = dal.getUserByUsername(req.body.username)
    if (foundUsr) {
      if (req.body.password === foundUsr.password) {
        req.session.usr = { name: foundUsr.name }
        res.render('admin', {user: foundUsr})
      }
      else {
        res.send("Invalid username or password")
      }
    }
    else {
      res.send("Invalid username or password")
    }

  })

//logout routes
router
  .route('/logout')
  .get(function (req, res) {
    res.render("logout")
  })
  .post(function (req, res) {
    res.redirect('/')
  })

//admin routes, oooo
router
  .route('/admin')
  .get(function (req, res) {
    if (req.isAuthenticated) {
      res.render('admin')
    }
    else {
      res.redirect('/')
    }
  })


module.exports = router
