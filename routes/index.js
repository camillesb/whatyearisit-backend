var express = require('express');
var router = express.Router();

/* Dans la partie backend, 
créez une seule route GET /year 
qui renverra l’année dans laquelle nous sommes 
grâce à l’objet Date. */

//1) Dans la route year je souhaite voir via get 
router.get('/year', function(req, res) {
  const date = new Date();
  const year = date.getFullYear();
  res.json({ year: year });

  // res.fonction callback qui permet de traiter la réponse
  // "res.json({ now: date })" est égal au résultat de la requête au format JSON

});

module.exports = router;
