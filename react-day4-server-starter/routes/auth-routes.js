const express    = require('express');
const authRoutes = express.Router();

const passport   = require('passport');
const bcrypt     = require('bcryptjs');

const mongoose = require('mongoose');

// require the user model !!!!
const User       = require('../models/user-model');
const Skills      = require('../models/skill-model')
const uploader = require('../configs/cloudinary-setup');


authRoutes.post('/signup', (req, res, next) => {
    const {username, password} = req.body
  
    if (!username || !password) {
      res.status(400).json({ message: 'Provide username and password' });
      return;
    }

    if(password.length < 7){
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
        return;
    }
  
    User.findOne({ username }, (err, foundUser) => {

        if(err){
            res.status(500).json({message: "Username check went bad."});
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' });
            return;
        }
  
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
  
        const aNewUser = new User({
            username: username,
            password: hashPass,
        });
  
        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }
            
                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
                debugger;
            });
        });
    });
});

authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }
    
        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            
            User.findById(theUser._id)
            .populate('skills')
            .populate('favourites')
            .then((user) => {
                
                res.status(200).json(user);
            })
            
        });
    })(req, res, next);
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        User.findById(req.user._id)
            .populate('skills')
            .populate('favourites')
            .then((user) => {
                res.status(200).json(user);
            })

    }else{
        res.status(403).json({message: 'Unauthorized'});
    }
  
});

// authRoutes.get('/:id', (req, res, next) => {
//     // req.isAuthenticated() is defined by passport
//     if (req.isAuthenticated()) {
//         User.findById(req.params.id)
//         .populate('favourites')
//         .then ((res) => {
//             res.status(200).json(res);
//             return;
//         })
        
//     }
//     res.status(403).json({ message: 'Unauthorized' });
// });

authRoutes.put('/:id', (req, res, next) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({
        message: 'Specified id is not valid'
      });
      return;
    }
  
    User.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({
          message: `User with ${req.params.id} is updated successfully.`
        });
      })
      .catch(err => {
        res.json(err);
      })
  })

  authRoutes.post('/uploadUserPic', uploader.single("picture"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
  
    res.json({ secure_url: req.file.secure_url });
  })


module.exports = authRoutes;