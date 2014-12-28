'use strict';

var players = require('../controllers/players');

// Article authorization helpers
// var hasAuthorization = function(req, res, next) {
//   if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
//     return res.status(401).send('User is not authorized');
//   }
//   next();
// };

module.exports = function(Players, app, auth) {
  app.route('/players')
    .get(players.all);
  app.route('/players/:playerId')
    .get(players.show);
  // Finish with setting up the articleId param
  app.param('playerId', players.player);
};


// The Package is past automatically as first parameter
// module.exports = function(Players, app, auth, database) {

  // app.get('/players/example/anyone', function(req, res, next) {
  //   res.send('Anyone can access this');
  // });

  // app.get('/players/example/auth', auth.requiresLogin, function(req, res, next) {
  //   res.send('Only authenticated users can access this');
  // });

  // app.get('/players/example/admin', auth.requiresAdmin, function(req, res, next) {
  //   res.send('Only users with Admin role can access this');
  // });

  // app.get('/players/example/render', function(req, res, next) {
  //   Players.render('index', {
  //     package: 'players'
  //   }, function(err, html) {
  //     //Rendering a view from the Package server/views
  //     res.send(html);
  //   });
  // });
  // app.get('/players')
// };
