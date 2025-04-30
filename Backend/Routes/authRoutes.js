const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const ticketController = require('../Controllers/ticketController');
const auth = require('../Middleware/auth');


router.post('/signup', authController.signup);
router.post('/login', authController.login);


router.post('/tickets', auth, ticketController.createTicket);
router.get('/tickets', auth, ticketController.getTickets);
router.put('/tickets/:id', auth, ticketController.updateTicket);

module.exports = router;