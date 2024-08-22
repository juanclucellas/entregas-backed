const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Incorrect password' });
    }

    const payload = {
        id: user._id,
        email: user.email,
    };

    const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.cookie('jwt', token, { httpOnly: true });
    res.json({ message: 'Logged in successfully', token });
});

module.exports = router;

router.get('/current', (req, res) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json({ user });
    })(req, res);
});
