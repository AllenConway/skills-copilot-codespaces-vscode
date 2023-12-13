// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// Routes
router.post('/posts/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

// Export
module.exports = router;