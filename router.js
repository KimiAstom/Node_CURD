const express = require('express')
const solve = require('./solve')
const router = express.Router()

router.get('/', function (req, res) {
  solve.render(function (data) {
    res.render('index.html', { data: data })
  })
})
router.get('/add', function (req, res) {
  res.render('form.html')
})
router.post('/student/new', function (req, res) {
  solve.new(req.body, function () {
    res.redirect('/')
  })
})
router.get('/student/update', function (req, res) {
  solve.FindById(req.query.id, function (student) {
    res.render('form1.html', student)
  })
})
router.post('/student/update', function (req, res) {
  solve.update(req.body, function () {
    res.redirect('/')
  })
})
router.get('/student/delete', function (req, res) {
  solve.delete(req.query.id, function () {
    res.redirect('/')
  })
})
module.exports = router