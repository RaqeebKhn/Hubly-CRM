const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth');
const Contact = require('../Models/contact');


router.get('/chats', auth, async (req, res) => {
    try {
        const chats = await Contact.find()
            .populate('user', 'firstName lastName email')
            .sort({ createdAt: -1 });
        
        res.json({
            success: true,
            chats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching chats'
        });
    }
});


router.post('/chat', auth, async (req, res) => {
    try {
        const chat = new Contact({
            user: req.user._id,
            message: req.body.message,
            ticketId: `CHAT-${Date.now()}`
        });

        await chat.save();
        
        res.status(201).json({
            success: true,
            chat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating chat'
        });
    }
});


router.put('/chat/:id', auth, async (req, res) => {
    try {
        const chat = await Contact.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        res.json({
            success: true,
            chat
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating chat'
        });
    }
});

module.exports = router;