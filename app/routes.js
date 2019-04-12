module.exports = function(app, passport, db) {

// render initial page =========================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs'); //add database render if needed be
    });
    //show owner page
    app.get('/owner', function(req, res) {
      db.collection('stats').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('owner.ejs', {
      user : req.user,
      stats: result
    })
  })
    });
    // =========================================================================
// GAME API SET UP =============================================================
// =============================================================================
app.put('/decrease', (req, res) => {
  db.collection('stats').update({}, {
    $inc: {
      monies: -req.body.userMoney
    }
  }, (err, result) => {
    if(err) return res.send(err)
    res.send(result)
  })

})

app.put('/increase', (req, res) => {
  db.collection('stats').update({}, {
    $inc: {
      monies: req.body.userMoney
    }
  }, (err, result) => {
    if(err) return res.send(err)
    res.send(result)
  })

})


//make note of what each route is doing

    // =============================================================================
// OWNER API SET UP ============================================================
// =============================================================================

//make note of what each route is doing

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

  // locally --------------------------------
      // LOGIN ===============================
      // show the login form
      app.get('/login', function(req, res) {
          res.render('login.ejs', { message: req.flash('loginMessage') });
      });

      // process the login form
      //use a stratagey login authentican
      app.post('/login', passport.authenticate('local-login', {
          successRedirect : '/owner', // redirect to the secure profile section
          failureRedirect : '/login', // redirect back to the signup page if there is an error
          failureFlash : true // allow flash messages
      }));

      // SIGNUP =================================
      // show the signup form
      app.get('/signup', function(req, res) {
          res.render('signup.ejs', { message: req.flash('signupMessage') });
      });

      // process the signup form
      app.post('/signup', passport.authenticate('local-signup', {
          successRedirect : '/owner', // redirect to the secure profile section
          failureRedirect : '/signup', // redirect back to the signup page if there is an error
          failureFlash : true // allow flash messages
      }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', isLoggedIn, function(req, res) {
      var user            = req.user;
      user.local.email    = undefined;
      user.local.password = undefined;
      user.save(function(err) {
          res.redirect('/');
      });
  });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();

  res.redirect('/');
}
