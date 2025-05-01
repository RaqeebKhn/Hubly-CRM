const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const auth = require('../Middleware/auth');


router.get('/team', auth, async (req, res) => {
    try {
        const teamMembers = await User.find(
            { _id: { $ne: req.user._id } },
            'firstName lastName email role'
        );
        
        res.json({
            success: true,
            teamMembers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching team members'
        });
    }
});

module.exports = router;