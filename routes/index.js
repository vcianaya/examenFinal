var express = require('express');
var router = express.Router();
var post = require('../controllers/post')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avances en computacion - Examen Final' });
});

router.get('/registroPost', post.registroPost);
router.get('/respuestaPost', post.respuestaPost);
//router.get('/guardarPost', post.guardarPost);

module.exports = router;
